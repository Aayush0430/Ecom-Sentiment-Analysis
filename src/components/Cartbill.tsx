import React from "react";
import { Divider, Button } from "@mui/material";
const Cartbill = () => {
  return (
    <div className="bg-[rgb(243,247,255)] p-[30px] w-[420px] ml-[30px] mt-[30px] rounded-xl font-light text-[0.9rem]">
      <p className="poppins font-normal mb-[15px] text-[1.1rem]">
        Order Summary
      </p>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p className="poppins">Rs. 2000</p>
      </div>
      <Divider className="my-2" />
      <div className="flex justify-between ">
        <p>Tax estimate</p>
        <p className="poppins">Rs. 10.00</p>
      </div>
      <Divider className="my-2" />
      <div className="flex justify-between font-normal">
        <p>Order total</p>
        <p className="poppins">Rs. 2010.0</p>
      </div>
      <Button
        variant="contained"
        className="w-[300px] mx-8  mt-5 bg-gray-400 poppins hover:scale-105 hover:bg-gray-500 transition ease-in duration-150"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cartbill;
