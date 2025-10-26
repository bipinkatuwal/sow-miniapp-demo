import React, { useEffect, useState } from 'react';
import { IoSearch, IoToggle, IoSettingsSharp, IoJournal, IoLogOut } from "react-icons/io5";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdPrint } from "react-icons/io";
import { FaFileInvoice } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { RxCrossCircled } from "react-icons/rx";
import { BiSolidOffer } from "react-icons/bi";
import { MdInventory2 } from "react-icons/md";
import { MdCardMembership, MdCloudDownload } from "react-icons/md";
import "./PriceList.css"
import { useAuth } from '../context/AuthContext';
import EditableCell from '../components/EditableCell';
import { jwtDecode } from "jwt-decode"
import toast, { Toaster } from 'react-hot-toast';

const PriceList = () => {
    const { logout } = useAuth();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 < Date.now()) {
                logout();
            }
        }
    }, [])

    async function fetchProducts() {
        const token = localStorage.getItem('token')
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "appilcation/json",
                Authorization: `Bearer ${token}`
            }
        });
        if (res.status === 401) {
            logout();
            return;
        }

        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await res.json();

        setProducts(data);
    }

    const handleUpdate = async (id, field, newValue) => {
        const token = localStorage.getItem('token')
        // Store the original product before update
        const originalProduct = products.find(p => p.id === id);

        // Immediately update UI (optimistic update)
        setProducts(prev => prev.map(p =>
            p.id === id ? { ...p, [field]: newValue } : p
        ));

        try {

            if (!field || !newValue) {
                toast.error("Field can't be empty!");
                throw new Error("Field can't be empty.")
            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    [field]: newValue
                })
            });

            const updated = await response.json();

            if (!updated.success) {
                toast.error(updated.message)
                // Revert to original value on error
                setProducts(prev => prev.map(p =>
                    p.id === id ? originalProduct : p
                ));
                return;
            }
            const updatedProduct = updated.product ?? updated;
            setProducts((prev) => (prev || []).map((p) => p.id === id ? updatedProduct : p))
            toast.success(updated.message)

        } catch (error) {
            console.error(error.message);
            // Revert to original value on error
            setProducts(prev => prev.map(p =>
                p.id === id ? originalProduct : p
            ));
            toast.error("Failed to update product");
        }
    }

    return (
        <>
            <Toaster />
            <div className="app-container">
                {/* Header - Full Width */}
                <header className="header-price-list">
                    <div className="header-left">
                        {/* Mobile/Tablet: Hamburger */}
                        <button className="hamburger-btn mobile-only">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/* Desktop: Profile Info */}
                        <div className="profile-section desktop-only">
                            <div className="avatar">JD</div>
                            <div className="user-info">
                                <div className="username">John Doe</div>
                                <div className="location">New York, USA</div>
                            </div>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="language-selector">
                            <span className="language-text">English</span>
                            <span className="flag">
                                <img src="/assets/flag-gb.png" alt="English Flag" className='flag-img' />
                            </span>
                        </div>
                    </div>
                </header>

                {/* Content Wrapper with Sidebar and Main Content */}
                <div className="content-wrapper">
                    {/* Sidebar - Desktop Only */}
                    <aside className="sidebar">
                        <div className="sidebar-header">
                            <h2>Menu</h2>
                        </div>
                        <nav className="sidebar-nav">
                            <a href="#invoices" className="nav-item">
                                <FaFileInvoice size={20} className='nav-item-icon' />
                                Invoices
                            </a>
                            <a href="#customers" className="nav-item active">
                                <FaUser size={20} className='nav-item-icon' />
                                Customers</a>
                            <a href="#my_business" className="nav-item">
                                <IoSettingsSharp size={20} className='nav-item-icon' />
                                My Business</a>
                            <a href="#invoice_journal" className="nav-item">
                                <IoJournal size={20} className='nav-item-icon' />
                                Invoice Journal</a>
                            <a href="#price_list" className="nav-item">
                                <ImPriceTag size={20} className='nav-item-icon' />
                                Price List</a>
                            <a href="#mutliple_invoicing" className="nav-item">
                                <LiaFileInvoiceSolid size={24} className='nav-item-icon' />
                                Multiple Invoicing</a>
                            <a href="#unpaid_invoices" className="nav-item">
                                <RxCrossCircled size={20} className='nav-item-icon' />
                                Unpaid Invoices</a>
                            <a href="#offers" className="nav-item">
                                <BiSolidOffer size={22} className='nav-item-icon' />
                                Offers</a>
                            <a href="#inventory_control" className="nav-item">
                                <MdInventory2 size={20} className='nav-item-icon' />
                                Inventory Control</a>
                            <a href="#member_invoicing" className="nav-item">
                                <MdCardMembership size={20} className='nav-item-icon' />
                                Member Invoicing</a>
                            <a href="#import_export" className="nav-item">
                                <MdCloudDownload size={20} className='nav-item-icon' />
                                Import/Export</a>
                            <span onClick={() => logout()} className="nav-item logout">
                                <IoLogOut size={24} className='nav-item-icon' />
                                Logout</span>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="main-content">

                        {/* Search and Actions */}
                        <div className="pricelist-actions">
                            <div className="search-group">
                                <div className='search-input-box'>
                                    <input
                                        type="text"
                                        placeholder="Search product..."
                                        className="search-input"
                                    />

                                    <IoSearch className='search-icon' size={24} />
                                </div>

                                <div className='search-input-box'>

                                    <input
                                        type="text"
                                        placeholder="Search Article No..."
                                        className="search-input"
                                    />
                                    <IoSearch className='search-icon' size={24} />
                                </div>
                            </div>
                            <div className="button-group">
                                <button className="action-btn secondary">
                                    <span className='action-btn-text'>
                                        Add Product
                                    </span>
                                    <BsFillPlusCircleFill className='action-btn-icon' size={18} />
                                </button>
                                <button className="action-btn secondary">
                                    <span className='action-btn-text'>Print List</span>
                                    <IoMdPrint className='action-btn-icon' size={22} />
                                </button>
                                <button className="action-btn secondary">
                                    <span className='action-btn-text'>Advance Mode</span>
                                    <IoToggle className='action-btn-icon' size={22} />
                                </button>
                            </div>
                        </div>

                        {/* Products Table */}
                        <div className="table-container">
                            <table className="products-table">
                                <thead>
                                    <tr>
                                        <th className="hide-mobile">Article No.</th>
                                        <th>Product/Service</th>
                                        <th className="hide-mobile-landscape hide-tablet">In Price</th>
                                        <th>Price</th>
                                        <th className="hide-mobile-landscape">Unit</th>
                                        <th className="hide-mobile ">In Stock</th>
                                        <th className="hide-mobile hide-tablet">Description</th>
                                        {/* <th>Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map((product) => (
                                        <tr key={product.id}>
                                            <td className="hide-mobile article" data-label="Article Number">
                                                {product.id}
                                            </td>
                                            <td className='product-service' data-label="Product/Service">
                                                <EditableCell
                                                    value={product.productName}
                                                    onSave={(v) => handleUpdate(product.id, "productName", v)}
                                                /></td>
                                            <td className="hide-mobile-landscape hide-tablet price-in" data-label="Price In">
                                                <EditableCell
                                                    value={product.inPrice}
                                                    onSave={(v) => handleUpdate(product.id, "inPrice", v)}
                                                />
                                            </td>
                                            <td className='price' data-label="Price">
                                                <EditableCell
                                                    value={product.price}
                                                    onSave={(v) => handleUpdate(
                                                        product.id,
                                                        "price",
                                                        v
                                                    )}
                                                />
                                            </td>
                                            <td className="hide-mobile-landscape unit" data-label="Unit">
                                                <EditableCell
                                                    value={product.unit}
                                                    onSave={(v) => handleUpdate(
                                                        product.id,
                                                        "unit",
                                                        v
                                                    )}
                                                />
                                            </td>
                                            <td className="hide-mobile in-stock-td" data-label="In Stock">
                                                <EditableCell
                                                    value={product.inStock}
                                                    onSave={(v) => handleUpdate(
                                                        product.id,
                                                        "inStock",
                                                        v
                                                    )}
                                                />
                                            </td>
                                            <td className="hide-mobile hide-tablet description" data-label="Description">
                                                <EditableCell
                                                    value={product.description}
                                                    onSave={(v) => handleUpdate(
                                                        product.id,
                                                        "description",
                                                        v
                                                    )}
                                                />
                                            </td>
                                            <td data-label="Actions">
                                                <button className="menu-dots">...</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceList;