"use client";
import React, { useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import AppsIcon from "@mui/icons-material/Apps";
import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const SideMenu = () => {
  const [rangeValues, setRangeValues] = React.useState<number[]>([500, 30000]);
  const [searchRangeValues, setSearchRangeValues] = React.useState<number[]>([
    0, 10000,
  ]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setRangeValues(newValue as number[]);
  };

  const handleInputValueChange = (inp: any) => {
    return function (e: any) {
      if (inp == "inp0") setRangeValues((prev) => [e.target.value, prev[1]]);
      else if (inp == "inp1")
        setRangeValues((prev) => [prev[0], e.target.value]);
    };
  };

  const removeSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.remove("showsidebar");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchRangeValues([rangeValues[0], rangeValues[1]]);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [rangeValues]);
  useEffect(() => {
    const body = document.querySelector("body");
    body?.addEventListener("click", removeSidebar);
  }, []);
  return (
    <div className="sidebar fixed-scrollbar w-[300px] h-[100vh] fixed overflow-y-auto">
      <div className="hello-user h-[70px] bg-[rgb(50,50,50)] flex items-center">
        <p className="ml-7 text-xl text-white font-bold">Hello, User</p>
      </div>
      {/* category section */}
      <div className="category-section ">
        {/* menutitle */}
        <div className="side-menu-title ml-7 my-3 flex items-center">
          <AppsIcon className="mr-2" />
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
          <p className="price-text pl-7 py-3 text-md font-bold">Price</p>
          <div className="price-range flex flex-col items-center justify-center">
            <Box sx={{ width: 200 }}>
              <Slider
                disableSwap
                value={rangeValues}
                onChange={handleChange}
                min={0}
                max={100000}
              />
            </Box>
            <div className="range-text mt-3  w-[80%] flex justify-around items-center">
              <p className="text-sm">
                Min
                <input
                  value={rangeValues[0]}
                  onChange={handleInputValueChange("inp0")}
                  className="border border-2 border-gray-200 ml-2 rounded-md outline-none py-1 px-1 w-[60px] text-center"
                />
              </p>
              <p>-</p>
              <p className="text-sm">
                Max
                <input
                  value={rangeValues[1]}
                  onChange={handleInputValueChange("inp1")}
                  className="border border-2 border-gray-200 ml-2 rounded-md outline-none py-1 px-1 w-[60px] text-center"
                />
              </p>
            </div>
          </div>
        </div>
        {/* <p>
          searchnow {searchRangeValues[0]} - {searchRangeValues[1]}
        </p> */}
      </div>
      {/* price high to low  */}
      <div className="stock-section ml-4 mt-3">
        <Checkbox />
        High To Low
      </div>
      {/* price low to high  */}
      <div className="stock-section ml-4">
        <Checkbox />
        Low to High
      </div>
      {/* availabe in stock  */}
      <p className="stock-text pl-7 pt-3 pb-1 text-md font-bold">Stock</p>
      <div className="stock-section ml-4">
        <Checkbox />
        Available in Stock
      </div>
      <Divider sx={{ marginBlock: "1.1rem" }} />
      {/* account */}

      <div className="side-menu-title ml-7 my-3 flex items-center">
        <ManageAccountsIcon className="mr-2" />
        <p className="text-xl font-bold ">Account</p>
      </div>
      <div className="category pl-14 pr-7 py-3 text-md flex items-center justify-between cursor-pointer transition-all ease duration-200 hover:bg-[rgb(235,235,235)]">
        <p className="">Login</p>
        <KeyboardArrowRightIcon sx={{ fontSize: "1.4rem", color: "gray" }} />
      </div>
      <div className="category pl-14 pr-7 py-3 text-md flex items-center justify-between cursor-pointer transition-all ease duration-200 hover:bg-[rgb(235,235,235)]">
        <p className="">Sign in</p>
        <KeyboardArrowRightIcon sx={{ fontSize: "1.4rem", color: "gray" }} />
      </div>
      <div className="category pl-14 pr-7 py-3 mb-10 text-md flex items-center justify-between cursor-pointer transition-all ease duration-200 hover:bg-[rgb(235,235,235)]">
        <p className="">Logout</p>
        <KeyboardArrowRightIcon sx={{ fontSize: "1.4rem", color: "gray" }} />
      </div>
    </div>
  );
};

export default SideMenu;
