import React from "react";

const SideMenu = () => {
  return (
    <div className="w-[300px] bg-gray-200 min-h-[100vh]">
      <div className="sideMenuTitle h-[50px] bg-blue-800 flex items-center">
        <p className="ml-7 text-xl text-white">Hello, User</p>
      </div>
      <div className="category-section">
        <p>Categories</p>
        <div className="categories">
          <div className="category">Electronic</div>
          <div className="category">Groceries</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
