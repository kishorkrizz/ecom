import React from 'react'

const Cardd = ({ image, title, desc }) => {
  return (
    <>
    <div className="max-w-sm bg-yellow-200 shadow-md rounded-xl border border-gray-200">
      <div className="p-4">
        <div>
          <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
    </>
  )
}

export default Cardd
