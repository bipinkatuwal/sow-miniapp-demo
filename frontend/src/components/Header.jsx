import React from 'react'
import "./Header.css";
import { Link } from 'react-router';
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    return (
        <nav class='main-header'>
            <header class="header">
                <section class="header-section">
                    <div class="logo">
                        <Link to={"/"}>
                            <img src="/assets/logo.png" alt="Logo" class='nav-logo' />
                        </Link>
                    </div>
                    <div class="menu">
                        <IoIosMenu class='hamburger' />
                    </div>
                    <div class="navigation-bar">
                        <div class="drop-down" style={{ height: 0 }}>
                            <div class="drop-down-container">
                                <a href="https://www.123fakturera.se/index.html" class='drop-down-item'>
                                    <p class='collectionSpan'>Home</p>
                                </a>
                                <a href="https://www.123fakturera.se/bestall.html" class='drop-down-item'>
                                    <p class='collectionSpan'>Order</p>
                                </a>
                                <a href="https://www.123fakturera.se/kunder.html" class='drop-down-item'>
                                    <p class='collectionSpan'>Our customers</p>
                                </a>
                                <a href="https://www.123fakturera.se/omoss.html" class='drop-down-item'>
                                    <p class='collectionSpan'>About us</p>
                                </a>
                                <a href="https://www.123fakturera.se/kontaktaoss.html" class='drop-down-item'>
                                    <p class='collectionSpan'>Contact us</p>
                                </a>
                            </div>
                        </div>
                        <div class="pc-menu">
                            <a href="https://www.123fakturera.se/index.html" class='pc-menu-items'>
                                <p class='collectionitem'>Home</p>
                            </a>
                            <a href="https://www.123fakturera.se/bestall.html" class='pc-menu-items'>
                                <p class='collectionitem'>Order</p>
                            </a>

                            <a href="https://www.123fakturera.se/kunder.html" class='pc-menu-items'>
                                <p class='collectionitem'>Our customers</p>
                            </a>
                            <a href="https://www.123fakturera.se/omoss.html" class='pc-menu-items'>
                                <p class='collectionitem'>About us</p>
                            </a>
                            <a href="https://www.123fakturera.se/kontaktaoss.html" class='pc-menu-items'>
                                <p class='collectionitem'>Contact us</p>
                            </a>
                            <a href="#" class='pc-menu-items language-pc-menu-items'>
                                <div>
                                    <div class="language-title-box">
                                        <p class="language-name">English</p>
                                        <img src="/assets/flag-gb.png" alt="English flag" class='flag-icon drop-down-image' />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="lang-drop">
                            <div class="lang-drop-container">
                                <div class="dropdownList" style={{ display: 'none' }}>
                                    <div class="drop-down-element">
                                        <div class="drop-down-lang-name">
                                            Svenska
                                        </div>
                                        <div class="drop-down-image-div">
                                            <img src="/assets/flag-se.png" alt="Svenska" class='drop-down-image' />
                                        </div>
                                    </div>
                                    <div class="drop-down-element">
                                        <div class="drop-down-lang-name">
                                            English
                                        </div>
                                        <div class="drop-down-image-div">
                                            <img src="/assets/flag-gb.png" alt="English" class='drop-down-image' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="language-dropdown">
                        <div>
                            <div class="dropdownContainer" >
                                <div class="language-box">
                                    <p class='flag-name collectionitem'>English</p>
                                    <img src="/assets/flag-gb.png" alt="English" class='icon-flag-nav' />
                                </div>
                            </div>
                            <div class="dropdownList" style={{
                                display: 'none'
                            }}>
                                <div class="drop-down-element">
                                    <div class="drop-down-lang-name">
                                        Svenska
                                    </div>
                                    <div class="drop-down-image-div">
                                        <img src="/assets/flag-se.png" alt="Svenska" class='drop-down-image' />
                                    </div>
                                </div>
                                <div class="drop-down-element">
                                    <div class="drop-down-lang-name">
                                        English
                                    </div>
                                    <div class="drop-down-image-div">
                                        <img src="/assets/flag-gb.png" alt="English" class='drop-down-image' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </nav>
    )
}

export default Header