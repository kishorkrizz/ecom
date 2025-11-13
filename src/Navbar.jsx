import React from 'react'
import Products from './Products.jsx'

const Navbar = () => {
  return (
    <nav className="">
        <ul className="flex flex-row gap-2 p-4 bg-gray-800 text-white">
        <li><a href="/login" className="hover:text-black p-5 bg-amber-200 rounded-lg">Loginn</a></li>
        <li><a href="/products" className="hover:text-black p-5 bg-amber-200 rounded-lg">Products</a></li>
        <li><a href="/cart" className="hover:text-black p-5 bg-amber-200 rounded-lg">Cart</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
