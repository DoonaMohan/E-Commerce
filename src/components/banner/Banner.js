import React from 'react';
import styles from '../styles/Banner.module.css';

function Banner({ url }) {
    return (

        <div className={styles.banner}>
            <img
                src={url}
                alt="Banner"
                height={300}

            />
        </div>

    );
}

export default Banner;

