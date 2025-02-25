"use client";

import React from "react";
import AtlasButton from "./components/Button/AtlasButton";
import HeroStars from "./components/HeroStars";

const NotFound = () => {
  return (
    <div className="flex justify-evenly items-center">
      <HeroStars count={100} />
      <div className="text-center">
        <h1>🛸</h1>
        <h2 className="text-6xl font-black">404: Signal Lost!</h2>
        <p className="py-4 font-bold">
          Our intergalactic scanners cannot locate this page.
          <br />
          You may have taken a wrong hyperspace jump!
        </p>
        <p>Try recalibrating your nav system!</p>
        <AtlasButton href="/" type="primary">
          🛰 Go Home
        </AtlasButton>
      </div>
    </div>
  );
};

export default NotFound;
