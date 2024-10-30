import React from "react";
import { Cartitem, Cartbill } from "@/index";
import { Divider } from "@mui/material";
const Cart = () => {
  return (
    <>
      <div className="w-4/5 mx-auto mt-[50px] h-auto p-[10px] bg-gray-0 border font-semibold rounded-[10px]">
        <div>
          <p className="text-[2rem] ml-10 pt-[20px] poppins ">Shopping Cart</p>
          <Divider sx={{ margin: "20px" }} />
        </div>
        <div className="flex">
          <div id="items" className="w-[60%] ">
            <Cartitem />
            <Cartitem />
          </div>
          <div id="bill" className="w-[40%] h-[400px] ">
            <Cartbill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
