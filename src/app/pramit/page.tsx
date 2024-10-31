"use client";
import React, { useEffect } from "react";
import { removeSidebar } from "@/index";
const page = () => {
  useEffect(() => {
    removeSidebar();
  }, []);
  return <div></div>;
};

export default page;
