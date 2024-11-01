"use client";
import { removeSidebar } from "@/helper/removeSidebar";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    removeSidebar();
  }, []);
  return (
    <section className="w-screen h-[90vh] flex justify-center  items-center">
      <div className="w-[500px] flex flex-col bg-white  px-10 pb-10 rounded-2xl shadow-md">
        <p className="text-4xl font-bold mx-auto my-5">Login</p>
        <TextField
          sx={{ marginBottom: "2rem" }}
          id="standard-basic"
          label="Username"
          variant="standard"
        />
        <TextField
          sx={{ marginBottom: "2rem" }}
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        <Button variant="contained">Login</Button>
        <p className="mt-3 text-sm">
          Don't have account?{" "}
          <Link href="/signup" className="font-bold underline text-blue-500">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
