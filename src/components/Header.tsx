import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <div className="bg-blue-500 ml-100px">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
