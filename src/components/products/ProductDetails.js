import React, { useState, useEffect, useContext } from 'react';
import cartContext from '../../contexts/CartContext';
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';

function ProductDetails() {
    const cartCtx = useContext(cartContext);
    const { productID } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        getSingleProduct();
    }, [productID]);

    const getSingleProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
        const productData = await response.json();
        setProduct(productData);
    }


    const ratingPer = (product?.rating?.rate / 5) * 100;

    const onButtonClick = (e) => {
        e.preventDefault();
        cartCtx.updateCart(product);
    }

    if (!product) { return }

    return (
        <div className="container d-flex justify-content-center ">
            <div className={styles.singleProductWrapper}>
                <div className={styles.singleProductImage}>
                    <img src={product?.image} height={300} alt="Product" />
                </div>
                <div className={styles.singleProductInfo}>
                    <h2 className={styles.singleProductTitle}>{product.title}</h2>
                    <p className={styles.productDescription}>{product.description}</p>
                    <div className={styles.rating}>
                        <div className={styles.productRating}>
                            <div
                                className={styles.foreground}
                                style={{ width: `${ratingPer}%` }}
                            ></div>
                            <div className={styles.background}></div>
                        </div>
                        <div className={styles.count}>({product.rating.count} reviews)</div>
                    </div>
                    <div className={styles.productPrice}>₹{product.price}</div>
                    <button className={styles.addToCartButton} onClick={onButtonClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
