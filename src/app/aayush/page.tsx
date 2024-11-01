"use client";
import React, { useEffect } from "react";
import { Card, removeSidebar } from "@/index";
const page = () => {
  useEffect(() => {
    removeSidebar();
  }, []);
  return (
    <div>
      <Card />
    </div>
  );
};

export default page;
