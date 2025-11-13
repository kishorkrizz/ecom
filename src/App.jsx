import React from 'react'
import Home from './Home.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login.jsx'
import Navbar from './Navbar.jsx'
import Forms from './Forms.jsx'
import ContactList from './List.jsx'
import Products from './Products.jsx'
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import { CartProvider } from "./CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/form' element={<Forms />} />
          <Route path='/list' element={<ContactList />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          </Routes> 
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
