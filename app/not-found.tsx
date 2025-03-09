"use client";

import React from "react";
import AtlasButton from "./components/Button/AtlasButton";
import HeroStars from "./components/HeroStars";

const NotFound = () => {
  return (
    <div className="flex justify-evenly items-center">
      <HeroStars />
      <div className="text-center">
        <h1 className="font-black">
          🛸
          <br />
          404: Signal Lost!
        </h1>
        <p className="py-7 leading-6 font-light">
          Our intergalactic scanners cannot locate this page.
          <br />
          You may have taken a wrong hyperspace jump!
          <br />
          Try recalibrating your nav system!
        </p>
        <p className="leading-none italic"></p>
        <AtlasButton href="/" type="primary">
          🛰 Go Home
        </AtlasButton>
      </div>
    </div>
  );
};

export default NotFound;
