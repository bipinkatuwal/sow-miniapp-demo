import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode"


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null
    });
    const [token, setToken] = useState(() => {
        const savedToken = localStorage.getItem('token');
        // Only return token if it's a valid string
        return (savedToken && savedToken !== "null") ? savedToken : "";
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function login(email, password) {
        setLoading(true);
        setError(null);

        // Clear any existing invalid token
        localStorage.removeItem('token');
        setToken("")

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, password
                })
            })
            const data = await response.json();

            if (!response.ok) {
                // Now handle the backend error message gracefully
                setError(data.message || "Login failed");
                throw new Error(data.message || "Login failed");
            }


            if (data.success && data.token) {
                setError(null);
                setUser(data.user)
                setToken(data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                localStorage.setItem("token", data.token)

                navigate("/pricelist")
            } else {
                setError(data.message);
                throw new Error("Login failed");
            }
        } catch (error) {
            console.error("Login error: ", error.message);
            setError(error.message);
            setToken("");
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setUser(null);
        setToken("");
        localStorage.clear();
        navigate('/login')
    }

    const isAuthenticated = !!user;

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 < Date.now()) {
                logout();
            }
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ login, logout, loading, error, token, user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext); 