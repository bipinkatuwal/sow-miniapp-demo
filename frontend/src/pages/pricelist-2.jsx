import React from 'react'
import "./PriceList.css"

const PriceList = () => {
    return (
        <div class="full-screen">
            <nav class="dash-navbar pricelist-navbar">
                <header class="dash-navbar__header">
                    <div style={{ display: "block" }}>
                        <div class="hamburger-icon-container">
                            <img src="/assets/menubar-BRVfWQHx.png" class="hamburger-icon" />
                            <p class="hamburger-icon__text">Menu</p>
                        </div>

                        <div class="mobile-menubar" style={{ top: 0 }}>
                            <div style={{ display: 'flex', width: '50px', cursor: 'pointer' }}>
                                <img src="" class="mobile-menubar__close-button" />
                            </div>

                            <p class="menubar__heading">Menu</p>

                            <div style={{ backgroundColor: 'rgb(128, 190, 226)', width: '100%', margin: 'auto', height: '1.5px' }}>
                            </div>

                            <div class="menubar__elements-div">
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                        <img src="" style={{
                                            display: 'none', width: '1.3rem'
                                        }} />
                                    </div>
                                    <a class="" href="/invoice" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img class="menubar-elements--icons" src="/assets/invoices-BkXL9vU_.png" />
                                            <p style={{ color: 'var(--80percent)' }}>Invoices</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                        <img src="" style={{
                                            display: 'none', width: '1.3rem'
                                        }} />
                                    </div>
                                    <a class="" href="/customer-register" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img class="menubar-elements--icons" src="/assets/customers-D9Vkbe79.png" />
                                            <p style={{ color: 'var(--80percent)' }}>Customer register</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                        <img src="" style={{
                                            display: 'none', width: '1.3rem'
                                        }} />
                                    </div>
                                    <a class="" href="/mybusiness" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img class="menubar-elements--icons" src="" />
                                            <p style={{ color: 'var(--80percent)' }}>My Business</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                        <img src="" style={{
                                            display: 'none', width: '1.3rem'
                                        }} />
                                    </div>
                                    <a class="" href="/invoice-journal" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img class="menubar-elements--icons" src="/assets/invoiceJournal-MUxoNRXF.png" />
                                            <p style={{ color: 'var(--80percent)' }}>Invoice Journal</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="menubar__element-container"><div style={{ width: '1.3rem' }}>
                                    <img src="" style={{ display: 'block', width: '1.3rem' }} />
                                </div>
                                    <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img class="menubar-elements--icons" src="/assets/pricelist-B-brUIvJ.png" />
                                            <p style={{ color: 'var(--80percent)' }}>Price List</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                        <img src="" style={{
                                            display: 'none', width: '1.3rem'
                                        }} />
                                    </div>
                                    <a class="" href="/" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img class="menubar-elements--icons" src="/assets/multipleInvoicing-CQx5HdvY.png" />
                                            <p style={{ color: 'var(--80percent)' }}>Multiple Invoicing</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                        <img src="" style={{
                                            display: 'none', width: '1.3rem'
                                        }} />
                                    </div>
                                    <a class="" href="/unpaid-invoices" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img class="menubar-elements--icons" src="/assets/unpaidInvoices-BDSWgO6w.png" />
                                            <p style={{ color: 'var(--80percent)' }}>Unpaid Invoices</p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <div class="menubar__element-container">
                                        <div style={{ width: '1.3rem' }}>
                                        </div>
                                        <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                            <div class="menubar__element">
                                                <img class="menubar-elements--icons" src="/assets/offer-D6rRk8QD.png" />
                                                <p style={{ color: 'var(--40percent)' }}>Offer</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="menubar__element-container">
                                        <div style={{ width: '1.3rem' }}>
                                        </div>
                                        <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                            <div class="menubar__element">
                                                <img class="menubar-elements--icons" src="/assets/inventoryControl-CqXFntIa.png" />
                                                <p style={{ color: 'var(--40percent)' }}>Inventory Control</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="menubar__element-container">
                                        <div style={{ width: '1.3rem' }}>
                                        </div>
                                        <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                            <div class="menubar__element">
                                                <img class="menubar-elements--icons" src="/assets/memberInvoicing-BrRSL3HS.png" />
                                                <p style={{ color: 'var(--40percent)' }}>Member Invoicing</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                        <img src="" style={{
                                            display: 'none', width: '1.3rem'
                                        }} />
                                    </div>
                                    <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img class="menubar-elements--icons" src="/assets/importExport-DcfkwvHi.png" />
                                            <p style={{ color: 'var(--80percent)' }}>Import and Export</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                    </div>
                                    <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img src="/assets/support-DaW0YcI6.png" style={{ height: '1.3rem', width: '1.3rem' }} />
                                            <p style={{ color: 'var(--80percent)' }}>Support</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="menubar__element-container">
                                    <div style={{ width: '1.3rem' }}>
                                    </div>
                                    <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                        <div class="menubar__element">
                                            <img src="" style={{ height: '1.3rem', width: '1.3rem' }} />
                                            <p style={{ color: 'var(--80percent)' }} >Log Out</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <section class="dash-navbar__section">
                        <div class="dash-navbar__buttons">
                            <div class="add-product pricelist-navbar__button dash-navbar__button">
                                <p class="dash-navbar__button__text">New Product</p>
                            </div>
                            <div class="pricelist-navbar__button dash-navbar__button">
                                <p class="dash-navbar__button__text">Print List</p>
                                <img src="/assets/print-phea0Rto.png" class="dash-navbar__button__icon" />
                            </div>
                            <div class="pricelist-navbar__button dash-navbar__button">
                                <p class="dash-navbar__button__text">Advanced mode</p>
                                <img src="/assets/advancedModeToggleOff-B_Y1yyLp.png" class="dash-navbar__button__icon" />
                            </div>
                        </div>
                        <div>
                        </div>
                    </section>
                    <div class="language-dropdown">
                        <div class="language__selected-option">
                            <div class="language__option-name">
                                <p>English</p>
                            </div>
                            <div class="language__option-flag-container">
                                <img src="https://storage.123fakturere.no/public/flags/GB.png" class="language__option-flag language__option-flag--selected" alt="english" />
                            </div>
                        </div>
                    </div>
                </header>
            </nav>

            <section class="main-display-section pricelist-main-display-section">
                <aside class="menubar">
                    <p class="menubar__heading">Menu</p>
                    <div style={{
                        backgroundColor: "rgb(128, 190, 226)", width: "80%", margin: "auto", height: "1.5px"
                    }}>
                    </div>
                    <div class="menubar__elements-div">
                        <div class="menubar__element-container">
                            <div style={{ width: "1.3rem" }}>
                                <img src="" style={{ display: "none", width: "1.3rem" }} />
                            </div>
                            <a class="" href="/invoice" style={{ textDecorationLine: "none", outline: "none" }}>
                                <div class="menubar__element">
                                    <img class="menubar-elements--icons" src="/assets/invoices-BkXL9vU_.png" />
                                    <p style={{ color: "var(--80percent)" }}>Invoices</p>
                                </div>
                            </a>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: "1.3rem" }}>
                                <img src="" style={{ display: "none", width: "1.3rem" }} />
                            </div>
                            <a class="" href="/customer-register" style={{
                                textDecorationLine: "none", outline: "none"
                            }}>
                                <div class="menubar__element">
                                    <img class="menubar-elements--icons" src="/assets/customers-D9Vkbe79.png" />
                                    <p style={{ color: "var(--80percent)" }}>Customer register</p>
                                </div>
                            </a>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: "1.3rem" }}>
                                <img src="" style={{ display: "none", width: "1.3rem" }} />
                            </div>
                            <a class="" href="/mybusiness" style={{ textDecorationLine: "none", outline: "none" }}>
                                <div class="menubar__element">
                                    <img class="menubar-elements--icons" src="" />
                                    <p style={{
                                        color: "var(--80percent)"
                                    }}>My Business</p>
                                </div>
                            </a>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: "1.3rem" }}>
                                <img src="" style={{ display: "none", width: "1.3rem" }} />
                            </div>
                            <a class="" href="/invoice-journal" style={{ textDecorationLine: "none", outline: "none" }}>
                                <div class="menubar__element">
                                    <img class="menubar-elements--icons" src="/assets/invoiceJournal-MUxoNRXF.png" />
                                    <p style={{ color: "var(--80percent)" }}>Invoice Journal</p>
                                </div>
                            </a>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: "1.3rem" }}>
                                <img src="" style={{ display: "block", width: "1.3rem" }} />
                            </div>
                            <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                <div class="menubar__element">
                                    <img class="menubar-elements--icons" src="/assets/pricelist-B-brUIvJ.png" />
                                    <p style={{ color: 'var(--80percent)' }}>Price List</p>
                                </div>
                            </a>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: '1.3rem' }}>
                                <img src="" style={{ display: 'none', width: '1.3rem' }} />
                            </div>
                            <a class="" href="/" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                <div class="menubar__element">
                                    <img class="menubar-elements--icons" src="/assets/multipleInvoicing-CQx5HdvY.png" />
                                    <p style={{ color: 'var(--80percent)' }}>Multiple Invoicing</p>
                                </div>
                            </a>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: '1.3rem' }}>
                                <img src="" style={{ display: 'none', width: '1.3rem' }} />
                            </div>
                            <a class="" href="/unpaid-invoices" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                <div class="menubar__element">
                                    <img class="menubar-elements--icons" src="/assets/unpaidInvoices-BDSWgO6w.png" />
                                    <p style={{ color: 'var(--80percent)' }}>Unpaid Invoices</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <div class="menubar__element-container"><div style={{ width: '1.3rem' }}>
                            </div>
                                <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                    <div class="menubar__element">
                                        <img class="menubar-elements--icons" src="/assets/offer-D6rRk8QD.png" />
                                        <p style={{ color: 'var(--40percent)' }}>Offer</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div class="menubar__element-container">
                                <div style={{ width: '1.3rem' }}>
                                </div>
                                <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                    <div class="menubar__element">
                                        <img class="menubar-elements--icons" src="/assets/inventoryControl-CqXFntIa.png" />
                                        <p style={{ color: 'var(--40percent)' }}>Inventory Control</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div class="menubar__element-container">
                                <div style={{ width: '1.3rem' }}>
                                </div>
                                <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                    <div class="menubar__element">
                                        <img class="menubar-elements--icons" src="/assets/memberInvoicing-BrRSL3HS.png" />
                                        <p style={{ color: 'var(--40percent)' }}>Member Invoicing</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: '1.3rem' }}>
                                <img src="" style={{ display: 'none', width: '1.3rem' }} />
                            </div>
                            <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                <div class="menubar__element">
                                    <img class="menubar-elements--icons" src="/assets/importExport-DcfkwvHi.png" />
                                    <p style={{ color: 'var(--80percent)' }}>Import and Export</p>
                                </div>
                            </a>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: '1.3rem' }}>
                            </div>
                            <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                <div class="menubar__element">
                                    <img src="/assets/support-DaW0YcI6.png" style={{ height: '1.3rem', width: '1.3rem' }} />
                                    <p style={{ color: 'var(--80percent)' }}>Support</p>
                                </div>
                            </a>
                        </div>
                        <div class="menubar__element-container">
                            <div style={{ width: '1.3rem' }}>
                            </div>
                            <a aria-current="page" class="active" href="/pricelist" style={{ textDecorationLine: 'none', outline: 'none' }}>
                                <div class="menubar__element">
                                    <img src="" style={{ height: '1.3rem', width: '1.3rem' }} />
                                    <p style={{ color: 'var(--80percent)' }}>Log Out</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </aside>

                <section class="main-container--menubar-off pricelist-container--menu-bar-off">
                    <div id="myId" class="main-pricelist__header-wrapper__menu-bar-off">
                        <div class="main-pricelist-container__taskbar">
                            <div class="search-form__container">
                                <form class="search-form" novalidate="">
                                    <input class="search-box" type="text" name="search" id="title" placeholder="Search Product .." value="" style={{
                                        color: "black"
                                    }} />
                                    <img src="/assets/search-CNYZzbly.png" class="search-form-icon" />
                                </form>
                                <form class="search-form" novalidate="">
                                    <input class="search-box" type="text" name="search" id="freeSearch" placeholder="Free Search" value="" style={{
                                        color: "black"
                                    }} />
                                    <img src="/assets/search-CNYZzbly.png" class="search-form-icon" />
                                </form>
                            </div>
                        </div>
                        <div class="main-pricelist__header__menu-bar-off" style={{
                            display: "flex", gap: "8px"
                        }}>
                            <div class="grid-9-ord  main-pricelist-container__table__header">
                                <div class="pricelist-item__in-price" style={{ width: "1.3rem" }}>
                                </div>
                                <div class="pricelist-item__header pricelist-item__name--advanced-mode-no ">
                                    <div style={{ display: "flex", placeContent: "space-between", gap: "2px" }}>
                                        <p>Product / Service</p>
                                    </div>
                                </div>
                                <div class="pricelist-item__header pricelist-item__price pricelist-item__header-price">Price</div>
                                <div class="pricelist-item__header pricelist-item__in-stock pricelist-item__header-in-stock">In Stock</div>
                            </div>
                            <div style={{
                                cursor: "pointer"
                            }}>
                                <img src="/src/icons/pricelist/three_dots.png" style={{
                                    height: "1.3rem", cursor: "pointer", marginTop: "8px", visibility: "hidden"
                                }} />
                            </div>
                        </div>
                    </div>
                    <section class="main-pricelist-container__table">
                        <div>
                            <section class="pricelist-item__section">
                                <div class="grid-9-ord pricelist-item__div">
                                    <div class="pricelist-item_pointer-div">
                                        <img src="" style={{
                                            display: "none", width: "1.3rem"
                                        }} />
                                    </div>
                                    <div class="pricelist-item__name--advanced-mode-no pricelist-item ">
                                        <input type="text" name="name" placeholder="" class="pricelist-item__input" value="test 2" />
                                    </div>
                                    <div class="pricelist-item__price pricelist-item">
                                        <input type="text" name="price" placeholder="" class="pricelist-item__input" value="0" style={{ textAlign: "right" }} />
                                    </div>
                                    <div class="pricelist-item__in-stock pricelist-item">
                                        <input type="text" name="in_stock" placeholder="" class="pricelist-item__input" value="1 000" style={{ textAlign: "right" }} />
                                    </div>
                                </div>
                                <div style={{
                                    display: "block"
                                }}>
                                    <div>
                                        <img src="" style={{
                                            height: "1.3rem", cursor: "pointer", marginTop: "8px"
                                        }} />
                                    </div>
                                    <div class="mobile-item-menu__dropdown-menu" style={{ display: "none" }}>
                                        <div class="mobile-item-menu__dropdown-menu__item">
                                            <div>
                                                <label>Product / Service</label>
                                            </div>
                                            <div class="pricelist-item">
                                                <input type="text" name="name" placeholder="Enter the product name" class="pricelist-item__input" value="test 2" />
                                            </div>
                                        </div>
                                        <div class="mobile-item-menu__dropdown-menu__item">
                                            <div>
                                                <label>In Price</label>
                                            </div>
                                            <div class="pricelist-item ">
                                                <input type="text" name="in_price" placeholder="Enter in price" class="pricelist-item__input" value="9 000" />
                                            </div>
                                        </div>
                                        <div class="mobile-item-menu__dropdown-menu__item">
                                            <div>
                                                <label>Price</label>
                                            </div>
                                            <div class="pricelist-item" style={{
                                                maxHeight: "50px", overflowY: "auto"
                                            }}>
                                                <input type="text" name="price" placeholder="Enter price" class="pricelist-item__input" value="0" />
                                            </div>
                                        </div>
                                        <div class="mobile-item-menu__dropdown-menu__item">
                                            <div>
                                                <label>In Stock</label>
                                            </div>
                                            <div class="pricelist-item">
                                                <input type="text" name="in_stock" placeholder="Enter stock" class="pricelist-item__input" value="1 000" />
                                            </div>
                                        </div>
                                        <div class="mobile-item-menu__dropdown-menu__item">
                                            <div>
                                                <label>Description</label>
                                            </div>
                                            <div class="pricelist-item">
                                                <input type="text" name="description" placeholder="Enter desctiption" class="pricelist-item__input" value="" />
                                            </div>
                                        </div>
                                        <div class="item-menu__dropdown-menu__item">
                                            <img src="" style={{
                                                width: "var(--default-icon-width)", height: "auto"
                                            }} />
                                            <p>Delete Product</p>
                                        </div>
                                        <div class="item-menu__dropdown-menu__item">
                                            <img src="" style={{
                                                width: "var(--default-icon-width)", height: "auto"
                                            }} />
                                            <p>Edit Product</p>
                                        </div>
                                        <div class="item-menu__dropdown-menu__item">
                                            <img src="" style={{
                                                width: "var(--default-icon-width)", height: "auto"
                                            }} />
                                            <p>Close</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </div >
    )
}

export default PriceList