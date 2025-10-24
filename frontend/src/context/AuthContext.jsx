import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null
    });
    const [token, setToken] = useState(() => localStorage.getItem('token') || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function login(email, password) {
        setLoading(true);
        setError(null);

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


            if (data.success) {
                console.log(data);
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
            setLoading(false);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setUser(null);
        setToken("");
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ login, logout, loading, error, token, user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext); 