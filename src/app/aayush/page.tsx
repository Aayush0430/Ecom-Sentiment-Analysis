"use client";
import React, { useEffect } from "react";
import { removeSidebar } from "@/index";
import { Card } from "@/index";
const page = () => {
  useEffect(() => {
    removeSidebar();
  }, []);
  return (
    <div>
      <div className="ml-10 mt-10 flex bg-red-200">
        <Card
          product={{
            name: "Watch",
            price: "1200",
            image:
              "https://www.titannepal.com/cdn/shop/files/2648WM04.jpg?v=1716471937",
          }}
        />
        <Card
          product={{
            name: "Attack Shark Mouse",
            price: "2800",
            image:
              "https://i5.walmartimages.com/asr/8de78d17-0283-49b3-a074-00720ca6ad0c.5b875553625c30a4416ad0545562a447.jpeg",
          }}
        />
      </div>
    </div>
  );
};

export default page;
