"use client";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}
const SideMenu = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="w-[300px]  min-h-[100vh]">
      <div className="hello-user h-[70px] bg-[rgb(50,50,50)] flex items-center">
        <p className="ml-7 text-xl text-white font-bold">Hello, User</p>
      </div>
      {/* category section */}
      <div className="category-section ">
        {/* menutitle */}
        <div className="side-menu-title ml-7 my-3 flex items-center">
          <CategoryOutlinedIcon className="mr-2" />
          <p className="text-xl font-bold ">Categories</p>
        </div>
        <div className="categories">
          <div className="category pl-14 pr-7 py-3 text-md flex items-center justify-between cursor-pointer transition-all ease duration-200 hover:bg-[rgb(235,235,235)]">
            <p className="">Electronic</p>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "1.4rem", color: "gray" }}
            />
          </div>
          <div className="category pl-14 pr-7 py-3 text-md flex items-center justify-between cursor-pointer transition-all ease duration-200 hover:bg-[rgb(235,235,235)]">
            <p className="">Shoes</p>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "1.4rem", color: "gray" }}
            />
          </div>
          <div className="category pl-14 pr-7 py-3 text-md flex items-center justify-between cursor-pointer transition-all ease duration-200 hover:bg-[rgb(235,235,235)]">
            <p className="">Groceries</p>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "1.4rem", color: "gray" }}
            />
          </div>
          <div className="category pl-14 pr-7 py-3 text-md flex items-center justify-between cursor-pointer transition-all ease duration-200 hover:bg-[rgb(235,235,235)]">
            <p className="">Play Station</p>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "1.4rem", color: "gray" }}
            />
          </div>
          <div className="category pl-14 pr-7 py-3 text-md flex items-center justify-between cursor-pointer transition-all ease duration-200 hover:bg-[rgb(235,235,235)]">
            <p className="">Watches</p>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "1.4rem", color: "gray" }}
            />
          </div>
        </div>
      </div>
      <Divider sx={{ marginBlock: "1.1rem" }} />
      {/* filter section */}
      <div className="filter-section">
        {/* menutitle */}
        <div className="side-menu-title ml-7 my-3 flex items-center">
          <TuneIcon className="mr-2" />
          <p className="text-xl font-bold ">Filter</p>
        </div>
        {/* pricerange */}
        <div className="price-range-section">
          <p className="price-text pl-7 py-3 text-md">Price</p>
          <div className="price-range flex flex-col items-center justify-center">
            <Box sx={{ width: 200 }}>
              <Slider
                value={value}
                onChange={handleChange}
                min={0}
                max={10000}
              />
            </Box>
            <div className="range-text mt-3  w-[80%] flex justify-around items-center">
              <p>
                Min
                <span className="border border-2 border-gray-200 ml-2 rounded-md py-1 px-3">
                  {value[0]}
                </span>
              </p>
              <p>-</p>
              <p>
                Max
                <span className="border border-2 border-gray-200 ml-2 rounded-md py-1 px-3">
                  {value[1]}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
