"use client";
import React from "react";
import { Card, SummaryCart } from "@/index";
import { Button, Divider } from "@mui/material";

const OrderSummary = () => {
  return (
    <div className="w-[40%] ml-14 bg-white px-10 pb-10 rounded-2xl shadow">
      <p className="text-xl font-bold my-4 poppins">Order Summary</p>
      <div className="products-price">
        <div className="orderproducts">
          <SummaryCart />
          <SummaryCart />
        </div>
        <div className="pricing w-[95%]" style={{ fontSize: ".85rem" }}>
          <div className="subtotal mb-3 w-full flex justify-between">
            <p>Subtotal</p>
            <p className="">Rs. 400</p>
          </div>

          <div className="Shipping mb-3 w-full flex justify-between">
            <p>Subtotal</p>
            <p className="">Rs. 400</p>
          </div>
          <Divider sx={{ marginBlock: "1rem" }} />
          <div
            style={{ fontSize: "1rem" }}
            className="total mb-3 w-full flex justify-between"
          >
            <p className="font-bold">Total</p>
            <p className="font-bold">Rs. 400</p>
          </div>
        </div>
        <Divider sx={{ marginBlock: "1rem" }} />
        <Button variant="contained" className="w-full">
          Confirm Order
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
