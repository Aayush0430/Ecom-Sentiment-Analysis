"use client";
import React from "react";
import { OrderSummary, ContactInformation, SummaryCart } from "@/index";

const Checkout = () => {
  return (
    <div className="w-[80%] mx-auto mt-14 flex">
      <ContactInformation />
      <OrderSummary />
      {/* <SummaryCart/> */}
    </div>
  );
};

export default Checkout;
