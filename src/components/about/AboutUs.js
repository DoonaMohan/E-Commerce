import styles from "../styles/About.module.css";
function AboutUs() {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className="d-flex justify-content-center ">
                <div className={`rounded-pill ${styles.ceoContainer}`}>
                    <div>
                        <img src="./assets/ceo.png" height={200} width={200} alt="CEO" />
                    </div>
                    <div className={styles.ceoInfo}>
                        <div>
                            <span className={styles.ceoName}>Diana Mercer,</span>
                            <span className={`text-black  ${styles.ceoName}`}>
                                Chief Executive Officer,DM Bazar
                            </span>
                        </div>
                        <div className={styles.ceoText}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.aboutContainer}>
                <div>
                    <img src="./assets/about.png" alt="About" />
                </div>
                <div className={styles.aboutText}>
                    <p>
                        DM Bazar is one of the leading digital commerce entities,
                        encompassing a range of services and products designed to cater to
                        the diverse needs of modern consumers. Our group includes DM
                        Fashion, DM Electronics, DM Groceries, DM Health, and DM Travel.
                        Since its inception in 2012,DM Bazar has empowered millions of
                        sellers, merchants, and small businesses to thrive in the digital
                        commerce landscape of India. With a registered customer base of over
                        400 million, DM Bazar's marketplace offers a vast selection of more
                        than 120 million products across 100+ categories. Today, over 13
                        lakh sellers, including those on our Shopee platform, are part of
                        our growing ecosystem.
                    </p>
                    <p>DM Bazar is committed to delivering value through technology and
                        innovation, aiming to enhance the shopping experience for every
                        customer. Our platform has created numerous job opportunities and has
                        been instrumental in fostering entrepreneurship among MSMEs (Micro,
                        Small, and Medium Enterprises). Known for pioneering customer-centric
                        services such as Cash on Delivery, No Cost EMI, and easy returns, DM
                        Bazar has made online shopping more accessible and affordable for
                        millions of consumers. In 2019, DM Bazar further enhanced its digital
                        payment offerings by introducing the DM UPI handle, aligning with
                        India’s vision for a robust digital economy. By continually innovating
                        and expanding our services, we aim to empower and delight every
                        customer, ensuring a seamless and satisfying shopping experience.</p>
                </div>
            </div>

            <div className={`container ${styles.meetOurLeadersWrapper}`}>
                <h2 className="fs-1 fw-bold">Meet Our Leaders</h2>
                <div className={`container ${styles.meetOurLeaders}`}>

                    <div className={styles.leader}>
                        <div className={styles.leaderImage}>
                            <img src="./assets/ceo.png" alt="Leader" />
                        </div>
                        <div className={styles.leaderName}>
                            Diana Mercer
                        </div>
                        <div className={styles.leaderDesignation}>
                            CEO, DM Bazaar Group
                        </div>
                    </div>
                    <div className={styles.leader}>
                        <div className={styles.leaderImage}>
                            <img src="./assets/ceo.png" alt="Leader" />
                        </div>
                        <div className={styles.leaderName}>
                            Benjamin Clarke
                        </div>
                        <div className={styles.leaderDesignation}>
                            Chief Operating Officer (COO)
                        </div>
                    </div>
                    <div className={styles.leader}>
                        <div className={styles.leaderImage}>
                            <img src="./assets/ceo.png" alt="Leader" />
                        </div>
                        <div className={styles.leaderName}>
                            Liam Carter
                        </div>
                        <div className={styles.leaderDesignation}>
                            Chief Technology Officer (CTO)
                        </div>
                    </div>
                    <div className={styles.leader}>
                        <div className={styles.leaderImage}>
                            <img src="./assets/ceo.png" alt="Leader" />
                        </div>
                        <div className={styles.leaderName}>
                            Emma Anderson
                        </div>
                        <div className={styles.leaderDesignation}>
                            Head of Human Resources
                        </div>
                    </div>
                    <div className={styles.leader}>
                        <div className={styles.leaderImage}>
                            <img src="./assets/ceo.png" alt="Leader" />
                        </div>
                        <div className={styles.leaderName}>
                            Mia Rodriguez
                        </div>
                        <div className={styles.leaderDesignation}>
                            Head of Customer Support
                        </div>
                    </div>
                    <div className={styles.leader}>
                        <div className={styles.leaderImage}>
                            <img src="./assets/ceo.png" alt="Leader" />
                        </div>
                        <div className={styles.leaderName}>
                            Olivia Martinez
                        </div>
                        <div className={styles.leaderDesignation}>
                            Chief Marketing Officer (CMO)
                        </div>
                    </div>
                    <div className={styles.leader}>
                        <div className={styles.leaderImage}>
                            <img src="./assets/ceo.png" alt="Leader" />
                        </div>
                        <div className={styles.leaderName}>
                            Amelia Green
                        </div>
                        <div className={styles.leaderDesignation}>
                            Head of Digital Marketing
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default AboutUs;
