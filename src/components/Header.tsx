"use client";
import Link from "next/link";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SideMenu from "./SideMenu";
const Header = () => {
  function handleBurgerclick() {
    const sidebar = document.querySelector(".sidebar");
    const closeDiv = document.querySelector(".close-div");
    const body = document.querySelector("body");
    if (sidebar) {
      sidebar.classList.add("showsidebar");
    }
    if (closeDiv) {
      closeDiv.classList.remove("hidden");
      closeDiv.classList.add("flex");
    }
    body?.classList.add("overflow-hidden");
  }
  return (
    <>
      <nav className="flex h-[10vh] items-center justify-between px-[15px] py-[20px] sticky top-0 z-1 bg-white">
        <div className=" flex items-center ">
          <Button onClick={handleBurgerclick} sx={{ color: "white" }}>
            <MenuIcon sx={{ cursor: "pointer", color: "black" }} />
          </Button>

          <a href="/" className="valofont font-medium text-[1.5rem] ml-20">
            PAC.ify
          </a>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-[500px] px-3 py-1 border-none outline-none"
            // value={searchQuery}
            // onChange={handleSearchChange}
          />
          <button type="submit" className="p-1 bg-gray-100 hover:bg-gray-200 ">
            <SearchIcon />
          </button>
        </div>

        <div className="w-28 flex justify-around">
          <Link href="/">
            <PersonOutlineIcon />
          </Link>
          <Link href="/cart">
            <ShoppingBagOutlinedIcon />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
