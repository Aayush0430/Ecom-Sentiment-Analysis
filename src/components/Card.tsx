import React from "react";
interface Product {
  image?: string;
  name: string;
  price: string;
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="w-max h-[310px]  bg-white p-[15px]">
      <div className="bg-gray-200 rounded-l  h-[250px] w-[250px]">
        <img
          className="h-[240px] w-[240px] m-auto object-contain  mix-blend-multiply"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className=" flex justify-between mt-[15px] w-full relative">
        <p className="font-light font-mono text-sm absolute left-2 poppins">
          {product.name}
        </p>
        <p className="poppins text-sm absolute right-2">Rs. {product.price}</p>
      </div>
    </div>
  );
};

export default Card;
