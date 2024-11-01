import { Button } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const LandingPage = () => {
  return (
    <div className="w-full">
      <div className="display-image h-full flex flex-col justify-center">
        <div className="landing-text ml-32 mb-5">
          <p className="landing-text1 text-5xl font-bold">
            Discover the best deals!
          </p>
          <p className="landing-text2 text-lg">
            Uncover the joy of shopping today.
          </p>
        </div>
        <button className="start-shopping-btn ml-32 w-max text-white font-bold">
          Start a shopping spree
          <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
