import React from "react";
import "./styles.css";
import Image from "next/image";
import Script from "next/script";
import HeroStars from "./components/HeroStars";
import FloatingAstronaut from "./components/FloatingAstronaut";
import FeatureSection from "./components/Feature/FeatureSection";

const HomePage = () => {
  return (
    <>
      <FloatingAstronaut />
      <div className="flex justify-evenly items-center md:mt-24 mt-8 hero-section">
        <div
          className="absolute inset-x-0 mx-auto h-5 w-full max-w-7xl bg-white opacity-90 rounded-full filter blur-3xl"
          style={{ top: "-1.5rem" }}
        ></div>
        <h1>
          Explore your
          <br />
          favorite{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            countries!
          </span>
        </h1>
        <div className="hero-image relative z-20">
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
        <HeroStars />
      </div>
      <FeatureSection />
      <Script src="/anime-float.js" strategy="beforeInteractive" />
    </>
  );
};

export default HomePage;
