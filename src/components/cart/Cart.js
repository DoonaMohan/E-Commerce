import { useContext } from "react";
import cartContext from "../../contexts/CartContext";
import styles from '../styles/Cart.module.css';
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
    const cartCtx = useContext(cartContext);

    const handleIncrementQty = (id) => {
        const updatedCart = cartCtx.cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        cartCtx.setCart(updatedCart);
    };

    const handleDecrementQty = (id) => {
        const updatedCart = cartCtx.cart.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        cartCtx.setCart(updatedCart);
    };

    const calculateTotalPrice = () => {
        return cartCtx.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleDeleteItem = (id) => {
        cartCtx.deleteFromCart(id);
    }

    return (
        <div className={`container ${styles.cartContainer}`}>
            <h3 className={styles.cartHeading}>Shopping Cart</h3>
            <hr className={styles.cartHeading} />
            {cartCtx.cart.length === 0 ? (
                <>
                    <div className={styles.missingCartImage}>
                        <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                            alt="Missing Cart"
                            height={200}
                        />
                    </div>
                    <p className="text-dark fs-5 p-4">Missing Cart Items?</p>
                    <p className="text-dark fs-6 p-2">Login to see the items you added previously</p>
                    <button className={styles.cartButton} >Login</button>
                </>
            ) : (
                <div className={styles.cartWrapper}>
                    <>
                        <ul className={styles.cartItems}>
                            {cartCtx.cart.map(item => (
                                <li key={item.id} className={styles.cartItem}>
                                    <div>
                                        <img src={item.image} height={200} alt='Product' className={styles.productImage} />
                                    </div>
                                    <div className={styles.productDetails}>
                                        <div className={styles.productTitle}>{item.title}</div>
                                        <div className={styles.productQuantity}>
                                            <span className={styles.quantityTitle}>Qty:</span>
                                            <button className={styles.updateQuantity} onClick={() => handleIncrementQty(item.id)}>+</button>
                                            <div className={styles.quantityValue}>{item.quantity}</div>
                                            <button className={styles.updateQuantity} onClick={() => handleDecrementQty(item.id)}>-</button>
                                            <button className={styles.deleteCartProduct} onClick={() => handleDeleteItem(item.id)}>Remove <DeleteIcon /></button>
                                        </div>
                                    </div>

                                    <div className={styles.itemPrice}>&#8377;{`${item.price * item.quantity}`}</div>
                                </li>
                            ))}
                            <hr className={styles.totalPrice} />
                            <div className={`text-dark fs-5 ${styles.totalPrice}`}>Subtotal(Items:{cartCtx.cart.length}): &#8377;{calculateTotalPrice().toFixed(2)}</div>
                        </ul>

                    </>
                    <div className={styles.cartSummary}>
                        <div className={styles.totalPrice}>
                            <div className="text-dark fs-5 ">Subtotal(Items:{cartCtx.cart.length}): &#8377;{calculateTotalPrice().toFixed(2)}</div>
                        </div>
                        <button className={styles.cartButton} >Place Order</button>
                        <div className={styles.emi}>
                            <div className={styles.emiText}>EMI Available</div>
                            <svg className={styles.rightChevron} width="6" height="13" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path></svg></div>
                    </div>

                </div>

            )}
        </div>
    );
}

export default Cart;
