import React, { useState, useEffect } from 'react';
import ProductCard from '../products/ProductCard';
function ProductList({ searchTerm }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const productsData = await response.json();
        setProducts(productsData);
    }
    const displayProducts = products.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div className="container">
            <div className="row p-3 gy-4 mt-3">
                {
                    displayProducts.map((p) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
                                <ProductCard product={p} />
                            </div>

                        );

                    })
                }

            </div>
        </div>
    );
}

export default ProductList;