"use client";
import { removeSidebar } from "@/helper/removeSidebar";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";

const Signup = () => {
  useEffect(() => {
    removeSidebar();
  }, []);
  return (
    <section className="h-[90vh] w-screen flex justify-center items-center mb-5">
      <div className="w-[500px] flex flex-col bg-white  px-10 pb-10 rounded-2xl shadow-md">
        <p className="text-4xl font-bold mx-auto my-5">Signup</p>
        <TextField
          sx={{ marginBottom: "2rem" }}
          id="standard-basic"
          label="Username"
          variant="standard"
        />
        <TextField
          sx={{ marginBottom: "2rem" }}
          id="standard-basic"
          label="Email Address"
          variant="standard"
        />
        <TextField
          sx={{ marginBottom: "2rem" }}
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        <TextField
          sx={{ marginBottom: "2rem" }}
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
        />
        <Button variant="contained">Signup</Button>
        <p className="mt-3 text-sm">
          Already have account?{" "}
          <Link href="/login" className="font-bold underline text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
