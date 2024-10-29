"use client";
import React from "react";
import { SideMenu } from "@/index";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
const page = () => {
  function handleBurgerclick() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.add("showsidebar");
    }
  }
  return (
    <div className="flex">
      <Button onClick={handleBurgerclick}>
        <MenuIcon sx={{ cursor: "pointer" }} />
      </Button>
      <SideMenu />
    </div>
  );
};

export default page;
