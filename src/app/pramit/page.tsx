"use client";
import React, { useEffect } from "react";
import { removeSidebar, Product } from "@/index";
const page = () => {
  useEffect(() => {
    removeSidebar();
  }, []);
  return (
    <div>
      <Product />
    </div>
  );
};

export default page;
