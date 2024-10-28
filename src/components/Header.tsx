import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">UrAnswer</a>
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
