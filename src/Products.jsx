// Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import Cardd from "./Cardd";

const products = [
  {
    id: 1,
    image: "/images/rc-car.jpg",
    title: "Amazon Prime",
    desc: "Stream thousands of movies and shows.",
  },
  {
    id: 2,
    image: "/images/rc-car.jpg",
    title: "Amazon Music",
    desc: "Listen to millions of ads-free songs.",
  },
  {
    id: 3,
    image: "/images/rc-car.jpg",
    title: "Amazon Fresh",
    desc: "Grocery shopping made easy and fast.",
  },
];

const Products = () => {
  return (
    <div className="p-6 bg-gray-700 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-white">Products Page</h2>
      <p className="text-gray-300 mb-6">
        Welcome to the products page. Browse and click a product for details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product,index) => (
          <Link to={`/product/${product.id}`}>
            <Cardd
              key={index}
              image={product.image}
              title={product.title}
              desc={product.desc}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
