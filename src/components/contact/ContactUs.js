import React from "react";
import styles from '../styles/Contact.module.css';

function ContactUs() {
    return (
        <div className="container-fluid">
            <div className={styles.helpCenter}>
                <div className={styles.helpCenterTitle}>
                    DM Bazar Help Center | 24x7 Customer Care Support
                </div>
                <div className={styles.helpCenterContent}>
                    The DM Bazar Help Centre is designed to quickly address various issues you might encounter, helping you get back to your online shopping smoothly. Whether you need assistance with order tracking, changes in delivery dates, returns, refunds, or other concerns, the Help Centre provides comprehensive support. It also includes information on DM Bazar Plus, payment methods, shopping tips, and more.

                    The page features filters on the left-hand side, allowing you to resolve your queries efficiently and hassle-free. If you require further assistance, you can access the DM Bazar Help Centre support number or get professional help from a support executive who will ensure prompt resolution for a positive shopping experience.

                    Feel free to share this support page with your loved ones so they can also address their issues effectively. Once your queries are resolved, you can dive back into your shopping list and take advantage of incredible deals during festive sales.
                </div>
            </div>

            <div className={`row ${styles.contacUsWrapper}`}>
                <div className={`col-3 ${styles.typeOfIssuesWrapper}`}>
                    <h6 className={styles.typeOfIssuesTitle}>TYPE OF ISSUE</h6>
                    <div className={styles.typeOfIssuesContent}>
                        Help with your issues
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Help with your orders
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Help with other issues
                    </div>
                    <div className={styles.middleLine}></div>
                    <h6 className={styles.typeOfIssuesTitle}>HELP TOPICS</h6>
                    <div className={styles.typeOfIssuesContent}>
                        Delivery Related
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Login and My account
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Refunds Related
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        DM Bazar Pay Later
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Payment
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Returns & Pickup related
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Cancellation Related
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        SuperCoins
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Personal Loans
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        Recharges
                    </div>
                    <div className={styles.typeOfIssuesContent}>
                        DM Bazar UPI
                    </div>
                </div>

                <div className={`col ${styles.helpCenterr}`}>
                    <div className="row bg-white w-100">
                        <div className="d-flex flex-column gap-5 p-3 align-items-center">
                            <div className={styles.helpCenterImage}>
                                <img src="./assets/helpCenterLogin.png" alt="Login" />
                            </div>
                            <div className={styles.helpCenterText}>
                                Login to get help with your recent orders and issues
                            </div>
                            <div className={styles.helpCenterLoginButton}>
                                <button className={styles.loginButton}>Log In</button>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-white w-100">
                        <div className={styles.faq}>
                            <div className={styles.faqHeading}>What issue are you facing?</div>
                            <div className={styles.faqContentWrapper}>
                                <div className={styles.faqContentTitle}>
                                    <div className={styles.mainTitle}>I want to manage my order</div>
                                    <div className={styles.subTitle}>View, cancel or return an order</div>
                                </div>
                                <svg className={styles.rightChevron} width="6" height="13" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path>
                                </svg>
                            </div>

                            <div className={styles.faqContentWrapper}>
                                <div className={styles.faqContentTitle}>
                                    <div className={styles.mainTitle}>I want help with returns and refunds</div>
                                    <div className={styles.subTitle}>Manage and track returns</div>
                                </div>
                                <svg className={styles.rightChevron} width="6" height="13" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path>
                                </svg>
                            </div>

                            <div className={styles.faqContentWrapper}>
                                <div className={styles.faqContentTitle}>
                                    <div className={styles.mainTitle}>I want help with other issues</div>
                                    <div className={styles.subTitle}>Offers, Payment, and all other issues</div>
                                </div>
                                <svg className={styles.rightChevron} width="6" height="13" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
