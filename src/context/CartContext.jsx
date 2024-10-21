
import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);

    // Effect to calculate total price whenever the cart changes
   

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotalPrice(total);
    }, [cart]);

    const discountPrice = totalPrice * 0.9;

 

// Function to add item to cart


const addToCart = (product) => {
    setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if (existingProduct) {
          
            return prevCart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        // If the product is new, add it to the cart
        return [...prevCart, { ...product, quantity: 1 }];
    });
    console.log(`New product added to cart: ${product.id}`); // Log the product ID being added
};

// Function to remove item from cart

const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    console.log(`Product removed from cart: ${productId}`);
};


// Function to increase quantity
const increaseQuantity = (productId) => {
    setCart(cart.map(item => 
        item.id === productId
        ? {...item, quantity: item.quantity+1}
        : item
        
    ));
};


// Function to decrease quantity
const decreaseQuantity = (productId) => {
    setCart(cart.map(item =>
        item.id === productId && item.quantity > 1
        ? {...item, quantity: item.quantity-1}
        : item
    ));
};



return (
    <CartContext.Provider value={{
        cart, 
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        discountPrice

    }} >
        { children }
    </CartContext.Provider>
);

};
