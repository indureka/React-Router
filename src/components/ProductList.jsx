import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
    const [products,setProducts] = useState([]);
    const { cart, addToCart, removeFromCart} = useContext(CartContext);

    // Fetch products from API store


    useEffect(() => { 
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
            //    console.log('Fetched products:', data); 
                setProducts(data); 
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);


    const isInCart = (product) => cart.some(item => item.id === product.id);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4"/>
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-gray-700 mt-2">${product.price}</p>
                        {isInCart(product) ? (
                            <button onClick={
                                () => removeFromCart(product.id)}
                                className="bg-red-500 text-white px-4 py-2 mt-4 rounded">Remove from Cart</button>
                            ) : (
                                <button onClick={
                                    () => addToCart(product)}
                                    className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
                            )}
               
                   </div> 
                ))}
            </div>
        </div>
    );
};

export default ProductList;