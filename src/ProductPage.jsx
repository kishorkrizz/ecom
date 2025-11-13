// ProductPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";

const products = [
  {
    id: 1,
    image: "/images/rc-car.jpg",
    title: "Amazon Prime",
    desc: "Stream thousands of movies and shows.",
    specs: ["4K UHD Streaming", "Exclusive Originals", "Ad-Free Experience"],
    reviews: [
      { user: "John", comment: "Great value for money!", rating: 5 },
      { user: "Priya", comment: "Loving the exclusive shows!", rating: 4 },
    ],
  },
  {
    id: 2,
    image: "/images/rc-car.jpg",
    title: "Amazon Music",
    desc: "Listen to millions of ads-free songs.",
    specs: ["75 Million Songs", "Offline Download", "High Quality Audio"],
    reviews: [
      { user: "Aarav", comment: "Best music streaming service!", rating: 5 },
      { user: "Sara", comment: "Better than Spotify IMO.", rating: 4 },
    ],
  },
  {
    id: 3,
    image: "/images/rc-car.jpg",
    title: "Amazon Fresh",
    desc: "Grocery shopping made easy and fast.",
    specs: ["Same Day Delivery", "Fresh Vegetables", "Affordable Pricing"],
    reviews: [
      { user: "Kishor", comment: "Super fresh and quick delivery!", rating: 5 },
      { user: "Meera", comment: "Sometimes late delivery.", rating: 3 },
    ],
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [popup, setPopup] = useState(false);

  if (!product) return <h2 className="text-center text-red-500 mt-10">Product Not Found</h2>;

  const handleAddToCart = () => {
    addToCart(product);
    setPopup(true);
    setTimeout(() => setPopup(false), 2000); // hide after 2s
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img src={product.image} alt={product.title} className="w-full h-80 object-cover rounded-md mb-6" />
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.desc}</p>

        <h3 className="text-xl font-semibold mb-2">Specifications:</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          {product.specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 mb-6"
        >
          Add to Cart
        </button>

        {popup && (
          <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            ✅ Product Added to Cart!
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2">Customer Reviews:</h3>
        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="border-b pb-2">
              <p className="font-semibold">{review.user}</p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500">⭐ {review.rating}/5</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
