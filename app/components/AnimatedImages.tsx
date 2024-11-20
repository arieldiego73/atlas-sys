"use client";

import anime from "animejs";
import Image from "next/image";
import Script from "next/script";
import React, { useEffect } from "react";

const AnimatedImages = () => {
  useEffect(() => {
    if (typeof anime !== "undefined") {
      anime({
        targets: ".anime-float-large",
        translateY: [
          { value: -10, duration: 3000 },
          { value: 0, duration: 3000 },
        ],
        easing: "easeInOutSine",
        loop: true,
        direction: "alternate",
      });

      anime({
        targets: ".anime-float-small",
        translateY: [
          {
            value: () => anime.random(-12, -3),
            duration: () => anime.random(3000, 400),
          },
          {
            value: () => anime.random(10, 0),
            duration: () => anime.random(2500, 1000),
          },
        ],
        easing: "easeInOutSine",
        loop: true,
        direction: "alternate",
      });
    }
  }, []);
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
        strategy="beforeInteractive"
      />
      <div className="hero-image relative z-20">
        {/* TODO: Move these images to a component and follow the solution in ChatGPT */}
        <Image
          className="anime-float-large"
          src={"/earth.png"}
          width="500"
          height="500"
          alt=""
        />
        <Image
          src={"/glass-triangle-1.png"}
          className="absolute top-3/4 right-0 anime-float-small"
          width="200"
          height="200"
          alt=""
        />
        <Image
          src={"/spring-1.png"}
          className="absolute top-0 left-0 anime-float-small"
          width="150"
          height="150"
          alt=""
        />
      </div>
    </>
  );
};

export default AnimatedImages;
