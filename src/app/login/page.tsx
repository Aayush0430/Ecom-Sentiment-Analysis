"use client";
import { removeSidebar } from "@/helper/removeSidebar";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import axios from "axios";
import { CleaningServicesOutlined } from "@mui/icons-material";
import { log } from "console";
import { notify } from "@/helper/notify";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  useEffect(() => {
    removeSidebar();
  }, []);

  async function handlelogin() {
    const { data } = await axios.post("/api/users/login", {
      username: "Ram",
      password: "ramram123",
    });
    notify(data.msg, data.statuscode);
    if (data.statuscode == 200) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }
  return (
    <section className="w-screen h-[90vh] flex justify-center  items-center">
      <ToastContainer />
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
        <Button variant="contained" onClick={handlelogin}>
          Login
        </Button>
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
