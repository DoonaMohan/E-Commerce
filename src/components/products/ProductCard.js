import React, { useContext } from 'react';
import styles from '../styles/ProductCard.module.css';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

function ProductCard({ product }) {
    const cartCtx = useContext(CartContext);

    const onButtonClick = (e) => {
        e.preventDefault();
        cartCtx.updateCart(product);
    };

    return (
        <Link to={`/product/${product.id}`} className={styles.noTextDecoration}>
            <div className={`${styles.cardHolder} card p-2 border-0`}>
                <div className={styles.productImage}>
                    <img className="h-100 w-100" src={product.image} alt={product.title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-wrap" style={{ height: '70px' }}>{product.title}</h5>
                    <div className="card-text fw-bolder fs-5">&#8377;{`${product.price}`}</div>
                    <button className={`  mt-3 ${styles.addToCartButton}`} onClick={onButtonClick}>Add to Cart</button>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
