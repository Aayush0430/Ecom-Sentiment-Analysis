"use client";
import React, { useEffect } from "react";
import { SideMenu } from "@/index";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { removeSidebar } from "@/helper/removeSidebar";
const page = () => {
  function handleBurgerclick() {
    const sidebar = document.querySelector(".sidebar");
    const closeDiv = document.querySelector(".close-div");
    if (sidebar) {
      sidebar.classList.add("showsidebar");
    }
    if (closeDiv) {
      closeDiv.classList.remove("hidden");
      closeDiv.classList.add("flex");
    }
  }
  useEffect(() => {
    removeSidebar();
  }, []);

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
