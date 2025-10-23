import React, { useEffect, useState } from 'react'
import "./Header.css";
import { Link } from 'react-router';
import { IoIosMenu } from "react-icons/io";
import { useLanguage } from '../context/TranslationContext';

const Header = () => {
    const { t, language, changeLanguage } = useLanguage();
    const [lang, setLang] = useState('en');
    const [openLangDropDown, setOpenLangDropDown] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        changeLanguage(lang)
    }, [lang])

    return (
        <nav class='main-header'>
            <header class="header">
                <section class="header-section">
                    <div class="logo">
                        <Link to={"/"}>
                            <img src="/assets/logo.png" alt="Logo" class='nav-logo' />
                        </Link>
                    </div>
                    <div class="menu" onClick={() => setOpenMenu(open => !open)}>
                        <IoIosMenu class='hamburger' />
                    </div>
                    <div class="navigation-bar">
                        <div class="drop-down" style={{
                            height:
                                openMenu ? "325px" : 0
                        }}>
                            <div class="drop-down-container">
                                <a href="https://www.123fakturera.se/index.html" class='drop-down-item'>
                                    <p class='collectionSpan collectionitem'>
                                        {t('navigation.home')}
                                    </p>
                                </a>
                                <a href="https://www.123fakturera.se/bestall.html" class='drop-down-item'>
                                    <p class='collectionSpan collectionItem'>
                                        {t('navigation.order')}
                                    </p>
                                </a>
                                <a href="https://www.123fakturera.se/kunder.html" class='drop-down-item'>
                                    <p class='collectionSpan collectionItem'>{t('navigation.our_customer')}</p>
                                </a>
                                <a href="https://www.123fakturera.se/omoss.html" class='drop-down-item'>
                                    <p class='collectionSpan collectionItem'>{t('navigation.about_us')}</p>
                                </a>
                                <a href="https://www.123fakturera.se/kontaktaoss.html" class='drop-down-item'>
                                    <p class='collectionSpan collectionItem'>{t('navigation.contact_us')}</p>
                                </a>
                            </div>
                        </div>
                        <div class="pc-menu">
                            <a href="https://www.123fakturera.se/index.html" class='pc-menu-items'>
                                <p class='collectionitem collectionSpan'>{t('navigation.home')}</p>
                            </a>
                            <a href="https://www.123fakturera.se/bestall.html" class='pc-menu-items'>
                                <p class='collectionitem collectionSpan'>{t('navigation.order')}</p>
                            </a>

                            <a href="https://www.123fakturera.se/kunder.html" class='pc-menu-items'>
                                <p class='collectionitem collectionSpan'>{t('navigation.our_customer')}</p>
                            </a>
                            <a href="https://www.123fakturera.se/omoss.html" class='pc-menu-items'>
                                <p class='collectionitem collectionSpan'>{t('navigation.about_us')}</p>
                            </a>
                            <a href="https://www.123fakturera.se/kontaktaoss.html" class='pc-menu-items'>
                                <p class='collectionitem collectionSpan'>{t('navigation.contact_us')}</p>
                            </a>
                            <a href="#" class='pc-menu-items language-pc-menu-items'>
                                <div>
                                    <div onClick={() => {
                                        setOpenLangDropDown(open => !open)
                                    }} class="language-title-box">
                                        <p class="language-name">{lang === "en" ? "English" : "Svenska"}</p>
                                        <img src={
                                            lang === "en" ? "/assets/flag-gb.png" : "/assets/flag-se.png"
                                        } alt={lang === "en" ? "English flag" : "Svenska flag"} class='flag-icon drop-down-image' />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="lang-drop">
                            {/* <div class="lang-drop-container">
                                <div class="language-box">
                                    <p class='flag-name collectionitem'>English</p>
                                    <img src="/assets/flag-gb.png" alt="English" class='icon-flag-nav' />
                                </div>
                            </div> */}

                            <div class="dropdownList" style={{ display: openLangDropDown ? "block" : "none" }}>
                                <div onClick={() => {
                                    setLang('sv')
                                    setOpenLangDropDown(false);
                                }} class="drop-down-element">
                                    <div class="drop-down-lang-name">
                                        Svenska
                                    </div>
                                    <div class="drop-down-image-div">
                                        <img src="/assets/flag-se.png" alt="Svenska" class='drop-down-image' />
                                    </div>
                                </div>
                                <div onClick={() => {
                                    setLang('en');
                                    setOpenLangDropDown(false);
                                }} class="drop-down-element">
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
                    <div class="language-dropdown">
                        <div onClick={() => {
                            setOpenLangDropDown(open => !open)
                        }} class="dropdownContainer" >
                            <div class="language-box">
                                <p class='flag-name collectionitem'>
                                    {lang === "en" ? "English" : "Svenska"}
                                </p>
                                <img src={lang === "en" ? "/assets/flag-gb.png" : "/assets/flag-se.png"
                                } alt={lang === "en" ? "English flag" : "Svenska flag"} class='icon-flag-nav' />
                            </div>
                        </div>
                        <div class="dropdownList" style={{ display: openLangDropDown ? "block" : "none" }}>
                            <div onClick={() => {
                                setLang('sv')
                                setOpenLangDropDown(false);
                            }} class="drop-down-element">
                                <div class="drop-down-lang-name">
                                    Svenska
                                </div>
                                <div class="drop-down-image-div">
                                    <img src="/assets/flag-se.png" alt="Svenska" class='drop-down-image' />
                                </div>
                            </div>
                            <div onClick={() => {
                                setLang('en');
                                setOpenLangDropDown(false);
                            }} class="drop-down-element">
                                <div class="drop-down-lang-name">
                                    English
                                </div>
                                <div class="drop-down-image-div">
                                    <img src="/assets/flag-gb.png" alt="English" class='drop-down-image' />
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