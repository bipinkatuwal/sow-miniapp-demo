import React from 'react'
import "./Footer.css"
import { useLanguage } from "../context/TranslationContext"

const Footer = () => {
    const { t } = useLanguage();
    return (
        <div class="footer">
            <footer class="footer-div" style={{
                position: "relative"
            }}>
                <div class="footer--text-section" style={{
                    borderBottom: "1px solid white"
                }}>
                    <div class="footer--lettafaktura-text">{t('footer').footer_heading}</div>
                    <div class="footer-menu">
                        <a href="https://www.123fakturera.se/index.html">
                            <span>
                                <p>{t('footer').home}</p>
                            </span>
                        </a>
                        <a href="https://www.123fakturera.se/bestall.html">
                            <span>
                                <p>{t('footer').order}</p>
                            </span>
                        </a>
                        <a href="https://www.123fakturera.se/kontaktaoss.html">
                            <span>
                                <p>{t('footer').contact_us}</p>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p class="copyright-text">{t('footer').copyright}</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer