"use client";
import { TextField } from "@mui/material";
import React from "react";

const ContactInformation = () => {
  return (
    <div className="w-1/2 h-max bg-white pb-10 shadow-md px-10 rounded-2xl">
      <p className="text-xl font-bold my-4 poppins">Contact Information</p>
      <div className="name flex justify-between w-full mb-7">
        <TextField
          sx={{ marginRight: "1rem" }}
          className="w-1/2"
          id="outlined-basic"
          label="First Name"
          variant="standard"
          size="small"
        />
        <TextField
          sx={{ marginLeft: "1rem" }}
          className="w-1/2"
          id="outlined-basic"
          label="Last Name"
          variant="standard"
          size="small"
        />
      </div>
      <div className="email mb-7 w-full">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Email Address"
          variant="standard"
          size="small"
        />
      </div>
      <div className="phone mb-7 w-full">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Phone"
          variant="standard"
          size="small"
        />
      </div>
      <div className="address mb-7 w-full">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Address"
          variant="standard"
          size="small"
        />
      </div>
      <div className="city-country flex justify-between w-full mb-7">
        <TextField
          sx={{ marginRight: "1rem" }}
          className="w-1/2 "
          id="outlined-basic"
          label="City"
          variant="standard"
          size="small"
        />
        <TextField
          sx={{ marginLeft: "1rem" }}
          className="w-1/2 "
          id="outlined-basic"
          label="Country"
          defaultValue={"Nepal"}
          disabled
          variant="standard"
          size="small"
        />
      </div>
    </div>
  );
};

export default ContactInformation;
