"use client";
import React, { useState } from "react";

const Plusminus = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity != 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
  return (
    <div className="flex items-center space-x-2 bg-gray-200 rounded ">
      <button
        onClick={decreaseQuantity}
        className="bg-gray-300 text-gray-500 rounded px-3 py-1"
      >
        -
      </button>
      <span className="text-l">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className="bg-gray-300 text-gray-500 rounded px-3 py-1"
      >
        +
      </button>
    </div>
  );
};

export default Plusminus;
