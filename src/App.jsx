import React from 'react'
import ProductList from './components/productList'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { CartContext } from "./context/CartContext.jsx";
import './App.css'

const App = () => {
 

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-blue-600 p-4 shadow-lg">
            <ul className="flex space-x-4 justify-between">
              <li>
              <Link to="/" className="text-white text-lg font-semibold hover:text-black">Products</Link></li>
              <li>
              <Link to="/cart" className="text-white text-lg font-semibold hover:text-black">cart</Link></li>
            </ul>
          </nav>
          <div className="container mx-auto py-10 px-4">
          <Routes>
            <Route path="/" element={<ProductList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
        </div>
    </Router>
  </CartProvider>

  );
};

export default App;
