import React from 'react'
import Header from '../components/Header'
import "./Login.css";
import Footer from '../components/Footer';


const Login = () => {
    return (
        <div>
            <div className="background-container">
                <img src="/assets/hero-image.jpg" alt="Background image" id='background-image' />
            </div>
            <Header />
            <div class="content">
                <div class="login-content-root">
                    <div class="back-login">
                        <form noValidate="" autoComplete="off">
                            <h2 class="login-heading">Log in</h2>
                            <section class="login-section">
                                <div class="login-email">
                                    <div><label htmlFor="" class="login-email-label">Enter your email address</label></div>
                                    <input class="login-input" type="email" id="email" required="" name="username" value="" autoComplete="on" placeholder="Email address" />
                                </div>
                                <span class="email-error-span error-span"></span>
                                <div class="login-password">
                                    <div>
                                        <label htmlFor="" class="login-password-label">Enter your password</label>
                                    </div>
                                    <div class="password-input-div">
                                        <input class="login-input" type="password" id="password" required="" name="password" value="" placeholder="Password" />
                                        <img id="show-password-img" src="/assets/show_password.png" alt="" />
                                    </div>
                                </div>
                                <span class="password-error-span error-span"></span>
                                <section class="invalid-credentials"></section>
                            </section>
                            <div class="Login-Button-div">
                                <button class="Login-Button" type="submit">Log in</button>
                            </div>
                        </form>
                        <section class="gotodifferntlink">
                            <a href="/register" class="login-new-customer">Register</a>
                            <a id="forgot-password-link" class="login-forgot-password" href="/forgot-password">Forgotten password?</a>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login