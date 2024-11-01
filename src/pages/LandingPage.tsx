import { Button } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CartGroup from "@/images/cartgroup.png";
import Package from "@/images/package.png";
import anicart from "@/images/anicart.png";
import Image from "next/image";
const LandingPage = () => {
  return (
    <div className="display-image h-full flex flex-col justify-center">
      <div className="landing-text ml-32 mb-5">
        <p className="landing-text1 text-5xl font-bold">
          Discover the best deals!
        </p>
        <p className="landing-text2 text-lg">
          Uncover the joy of shopping today.
        </p>
      </div>
      <Button
        variant="contained"
        sx={{ background: "white", color: "black" }}
        className="start-shopping-btn ml-32 w-max text-[#bea8ad] font-bold"
        disableElevation
      >
        <p className="mr-2">Start a shopping spree</p>
        <KeyboardDoubleArrowRightIcon />
      </Button>
      {/* <Image
        src={CartGroup}
        className="absolute right-0 mr-64 mix-blend-multiply"
        alt="cartgroup"
      /> */}
    </div>
  );
};

export default LandingPage;
