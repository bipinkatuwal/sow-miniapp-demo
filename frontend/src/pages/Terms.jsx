import React, { useState } from 'react'
import Header from '../components/Header'
import "./Terms.css";
import Footer from '../components/Footer';
import { useLanguage } from '../context/TranslationContext';
import { Link } from 'react-router';


const Terms = () => {
    const { t } = useLanguage();

    return (
        <div class='login-container'>
            <div class="background-container">
                <img src="/assets/hero-image.jpg" alt="Background image" id='background-image' />
            </div>
            <Header />
            <div class="content">
                <section class="terms-section">
                    <div class="terms-top-text">
                        <h1 class="terms-heading">{t("terms.terms")}</h1>
                        <button class="go-back-button" >
                            <Link to={"/"}>
                                {t("terms.close")}
                            </Link>
                        </button>
                    </div>
                    <div class="back-terms">
                        <p dangerouslySetInnerHTML={{ __html: t("terms.terms_text_1") }}></p>

                        <p>{t("terms.terms_text_2")}</p>

                        <p>{t("terms.terms_text_3")}</p>

                        <p class="mt-6">{t("terms.terms_text_4")}
                        </p>
                        <p class="mb-6">{t("terms.terms_text_5")}</p>

                        <p>{t("terms.terms_text_6")}</p>

                        <p>{t("terms.terms_text_7")}</p>

                        <p>{t("terms.terms_text_8")}</p>

                        <p>{t("terms.terms_text_9")}</p>

                        <p>{t("terms.terms_text_10")}</p>

                        <p>{t("terms.terms_text_10_se")}</p>

                        <p>{t("terms.terms_text_11")}</p>

                        <p>{t("terms.terms_text_12")}</p>

                        <p>{t("terms.terms_text_13")}</p>

                        <p>{t("terms.terms_text_14")}</p>

                        <p>{t("terms.terms_text_15")}</p>

                        <p>{t("terms.terms_text_16")}</p>

                        <p>{t("terms.terms_text_17")}</p>

                        <p>{t("terms.terms_text_18")}</p>

                        <p>{t("terms.terms_text_19")}</p>

                        <p>
                            {t("terms.terms_text_20")}
                        </p>

                        <p>{t("terms.terms_text_21")}</p>

                        <p>{t("terms.terms_text_22")}</p>

                        <p>{t("terms.terms_text_23")}</p>

                        <p>{t("terms.terms_text_24")}</p>
                    </div>
                    <div class="terms-top-text">
                        <button class="go-back-button" >
                            <Link to={"/"}>
                                {t("terms.close")}
                            </Link>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Terms