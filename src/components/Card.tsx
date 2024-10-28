import React from "react";
interface Product {
  image?: string;
  name: string;
  price: string;
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg p-3 bg-white">
      <img
        className="w-full h-48 object-contain"
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-700 text-base">Rs. {product.price}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center items-center">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
