import { createContext, useState } from "react";

const cartContext = createContext();

export default cartContext;

export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    const updateCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex >= 0) {
            const updatedCart = cart.map((item, index) =>
                index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        }
        else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }
    const deleteFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    }

    const value = {
        cart,
        updateCart,
        setCart,
        deleteFromCart
    }


    return (
        <cartContext.Provider value={value}>
            {
                children
            }
        </cartContext.Provider>

    );
}

