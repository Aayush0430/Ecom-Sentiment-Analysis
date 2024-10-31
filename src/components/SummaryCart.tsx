import React from "react";
import Divider from "@mui/material/Divider";
import { Plusminus } from "@/index";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Close } from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const SummaryCart = () => {
  return (
    <div className="w-full poppins">
      <div className="flex">
        <div className="mr-5">
          <img
            src="https://nobero.com/cdn/shop/files/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.jpg?v=1711976456"
            alt=""
            className="h-[70px] w-[70px] object-cover rounded-[10%] bg-gray-300"
          />
        </div>
        <div className="w-[70%] text-md flex flex-col">
            <p className="font-bold">T-shirt</p>
            <div className="eachprice-total flex justify-between ">
                <p className="font-medium text-xs">Rs. 1000</p>
                <div className="quantity-total flex flex-col">
                    <p className="text-xs">Quantity: 4</p>
                    <p className="text-xs">Total: Rs. 5000</p>
                </div>
            </div>
        </div>
      </div>
      <Divider sx={{ margin: "20px" }} />
    </div>
  );
};

export default SummaryCart;
