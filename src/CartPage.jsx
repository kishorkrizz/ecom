// CartPage.jsx
import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart } = useCart();  // ✅ destructure correctly
    console.log("Cart contents on CartPage:", cart);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((product, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow bg-white flex items-center space-x-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold">{product.title}</h3>
                <p className="text-gray-600">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
