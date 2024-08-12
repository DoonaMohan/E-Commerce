import React, { useContext } from "react";
import cartContext from "../../contexts/CartContext";
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

function Navigation({ onSearch }) {

    const { cart } = useContext(cartContext);
    const searchProduct = (event) => {
        const searchVal = event.target.value;
        onSearch(searchVal);
    }
    return (
        <div className={styles.navContainer}>
            <div className={styles.navTop}>

                <div className={styles.logo}>
                    <img src="../assets/DMLogo.jpg" alt="Logo" height={80} />
                </div>

                <div className={styles.searchBox}>

                    <i className={`fas fa-search fs-4 ${styles.searchIcon}`} />


                    <input type="text" className={`form-control border-0 ${styles.inputSearch}`} placeholder="Search" onChange={searchProduct} />


                </div>

                <div className={` d-flex gap-2  justify-content-center align-items-center ${styles.login}`}>
                    <div>
                        <img
                            src="../assets/user.png"
                            alt="Login"
                            className={styles.loginImage}
                            height={25}
                        />
                    </div>
                    <div className={styles.loginText}>Login</div>
                    <div className={styles.loginPopUp}>
                        <ul>
                            <li>New Customer</li>
                            <hr />
                            <li>My Profile</li>
                            <li>Orders</li>
                            <li>Whishlist</li>
                            <li>Rewards</li>
                            <li>Gift Cards</li>

                        </ul>
                    </div>
                </div>


                <div className={styles.cart}>
                    <NavLink to="/cart" className="text-decoration-none">
                        <span>
                            <i className="fas fa-cart-plus" style={{ fontSize: 26 }} ></i>
                        </span>
                        <span>{cart.length}</span>
                    </NavLink>
                </div>
            </div>
            <div className={` container-fluid d-flex justify-content-center p-2 ${styles.navBottom}`}>
                <ul className="nav  border-0">
                    <li className="nav-item">
                        <NavLink className={`nav-link ${styles.linkText}`} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${styles.linkText}`} to="/productlist">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${styles.linkText}`} to="/aboutus">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${styles.linkText}`} to="/contactus">Contact Us</NavLink>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Navigation;
