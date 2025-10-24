import React, { useState } from 'react'
import Header from '../components/Header'
import "./Login.css";
import Footer from '../components/Footer';
import { useLanguage } from '../context/TranslationContext';
import { useAuth } from '../context/AuthContext';


const Login = () => {
    const { t } = useLanguage();
    const {
        loading,
        error,
        login
    } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    function handleLoginForm(e) {
        e.preventDefault()

        if (!email) {
            setEmailError(t("login.field_empty"))
        }

        if (!password) {
            setPasswordError(t('login.password_required'))
        }

        login(email, password);

        setEmail("");
        setPassword("");
    }

    return (
        <div class='login-container'>
            <div class="background-container">
                <img src="/assets/hero-image.jpg" alt="Background image" id='background-image' />
            </div>
            <Header />
            <div class="content">
                <div class="login-content-root">
                    <div class="back-login">
                        <form onSubmit={handleLoginForm} autoComplete="off">
                            <h2 class="login-heading">{t('login.login')}</h2>
                            <section class="login-section">
                                <div class="login-email">
                                    <div>
                                        <label htmlFor="email" class="login-email-label">{t('login.enter_email')}</label>
                                    </div>
                                    <input
                                        class="login-input"
                                        type="email"
                                        id="email"
                                        required={true}
                                        name="email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="on" placeholder={t('login.email')} />
                                </div>
                                {emailError && <span class="email-error-span error-span">
                                    {emailError}
                                </span>}
                                <div class="login-password">
                                    <div>
                                        <label htmlFor="" class="login-password-label">{t('login.enter_password')}</label>
                                    </div>
                                    <div class="password-input-div">
                                        <input
                                            class="login-input" type={showPassword ? "text" : "password"} id="password"
                                            required={true}
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder={t('login.password')} />
                                        <img onClick={() => setShowPassword(show => !show)} id="show-password-img" src="/assets/show_password.png" alt="Password toggler" />
                                    </div>
                                </div>
                                {
                                    passwordError && <span class="password-error-span error-span">
                                        {passwordError}
                                    </span>
                                }

                                {
                                    error && <span class="password-error-span error-span error">
                                        {error}
                                    </span>
                                }
                                <section class="invalid-credentials"></section>
                            </section>
                            <div class="Login-Button-div">
                                <button class="Login-Button" type="submit">
                                    {loading ? "Logging in..." : t('login.login')}
                                </button>
                            </div>
                        </form>
                        <section class="gotodifferntlink">
                            <a href="/register" class="login-new-customer">{t('login.new_customer')}</a>
                            <a id="forgot-password-link" class="login-forgot-password" href="/forgot-password">{t('login.get_password')}</a>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login