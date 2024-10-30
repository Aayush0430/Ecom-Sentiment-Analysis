import React from "react";
import Divider from "@mui/material/Divider";
import { Plusminus } from "@/index";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Close } from "@mui/icons-material";
const Cartitem = () => {
  return (
    <div className="w-[90%] mx-[5%]">
      <div className="flex">
        <div>
          <img
            src="https://nobero.com/cdn/shop/files/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.jpg?v=1711976456"
            alt=""
            className="h-[150px] w-[150px] object-cover rounded-[10%] bg-gray-300 hover:scale-105 transition duration-75"
          />
        </div>
        <div className="ml-[50px] mt-[10px] relative w-[70%]">
          <p className="text-[1.2rem] font-light">T-shirt</p>
          <h1 className="mt-[5px] poppins font-medium ">Rs. 1000</h1>
          <div className="absolute top-[10px] left-[200px]">
            <Plusminus />
          </div>
          <p className="absolute w-max items-center justify-center top-[110px] text-[0.8rem] font-light">
            <DoneIcon
              sx={{ color: "green", fontSize: "1.4rem", marginRight: "5px" }}
            />
            In stock
          </p>
          <CloseIcon className="text-[1.2rem] absolute top-[5px] right-[20px] cursor-pointer hover:rotate-90 hover:scale-150 hover:text-red-600 transition duration-150" />
        </div>
      </div>
      <Divider sx={{ margin: "20px" }} />
    </div>
  );
};

export default Cartitem;
