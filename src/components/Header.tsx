import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideMenu from "./SideMenu";
const Header = () => {
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
  return (
    <>
      <nav className="navbar">
        <Button onClick={handleBurgerclick} sx={{ color: "white" }}>
          <MenuIcon sx={{ cursor: "pointer" }} />
        </Button>

        <div className="navbar-brand">
          <a href="/">UrAnswer</a>
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search"
            // value={searchQuery}
            // onChange={handleSearchChange}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
        <Link href="/cart">
          <ShoppingCartIcon />
        </Link>
        {/* <ul className={navbar-links ${isMenuOpen ? 'active' : ''}}>
      <li><a href="home">Home</a></li>
      <li><a href="services">Services</a></li>
      <li><a href="contact">Contact</a></li>
    </ul>
    <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      </nav>
    </>
  );
};

export default Header;
