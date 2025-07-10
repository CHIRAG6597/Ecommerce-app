import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home'; 
import './App.css'; // Assuming you have some styles in App.css
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/cart.jsx'; // Importing the Cart component
import Navbar from './components/Navbar'; // Importing the Navbar component

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
// This code sets up a basic React application with React Router for navigation.
// It includes three routes: a home page, a cart page, and a product detail page