import React from "react";
import { Card } from "@/index";
const page = () => {
  return (
    <div>
      <div className="ml-[200px] mt-10">
        <Card
          product={{
            name: "Watch",
            price: "1200",
            image:
              "https://www.titannepal.com/cdn/shop/files/2648WM04.jpg?v=1716471937",
          }}
        />
      </div>
    </div>
  );
};

export default page;
