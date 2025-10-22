import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div class="footer">
            <footer class="footer-div" style={{
                position: "relative"
            }}>
                <div class="footer--text-section" style={{
                    borderBottom: "1px solid white"
                }}>
                    <div class="footer--lettafaktura-text">123 Fakturera </div>
                    <div class="footer-menu"><a href="https://www.123fakturera.se/index.html"><span><p>Home</p></span></a><a href="https://www.123fakturera.se/bestall.html"><span><p>Order</p></span></a><a href="https://www.123fakturera.se/kontaktaoss.html"><span><p>Contact us</p></span></a></div>
                </div>
                <div class="footer-copyright">
                    <p class="copyright-text">© Lättfaktura, CRO no. 638537, 2025. All rights reserved. </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer