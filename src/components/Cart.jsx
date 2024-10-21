
import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext.jsx"

const Cart = () => {
   
        const {cart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice, discountPrice} = useContext(CartContext);
     
    return (
        <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-5">Cart</h1>
        {cart.length === 0 
            ? (
                <p className="text-lg">Your cart is empty</p>
            ) 
            : (
                <div>
                    <ul className="space-y-4">
                    {cart.map(item => (
                        <li key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center sm:space-x-4">
                            <div className="flex items-center space-x-4">
                            <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                            
                            <span className="text-lg font-semibold text-center sm:text-left">{item.title}</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span className="text-lg">{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                            <span className="text-gray-800 font-semibold mt-4 sm:mt-0">${(item.price * item.quantity).toFixed(2)}</span>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline mt-4 sm:mt-0">RemoveFromCart</button>
                        </li>

                    ))}
                    </ul>
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                        <p className="text-lg font-bold"><strong>Total Price:</strong>${totalPrice.toFixed(2)}</p>
                        <p className="text-lg font-bold text-green-500 mt-1"><strong>Final Price(with 10% discount):</strong>${discountPrice.toFixed(2)}</p>
                    </div>
                    
                </div>
            )}
        </div>
    );
    
   
};


    export default Cart;