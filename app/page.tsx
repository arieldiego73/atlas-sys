import React from "react";
import "./styles.css";
import HeroStars from "./components/HeroStars";
import FloatingAstronaut from "./components/FloatingAstronaut";
import FeatureSection from "./components/Feature/FeatureSection";
import TopGlow from "./components/TopGlow";
import { Button } from "flowbite-react";
import AnimatedImages from "./components/AnimatedImages";

const HomePage = () => {
  return (
    <>
      <FloatingAstronaut />
      <TopGlow />
      <div className="flex justify-evenly items-center md:mt-24 mt-8 hero-section">
        <HeroStars count={100} />
        <div className="header w-7/12">
          <h1>
            Explore the Cosmos of
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Earthly Destinations!
            </span>
          </h1>
          <p>
            From alien eyes to human hearts—discover the wonders of Earth&apos;s
            countries through a galactic lens.
            <br />
            Your interstellar travel guide awaits!
          </p>
          <div className="flex jutify-start items-center">
            <Button color={"blue"} type="button">
              Start Your Journey!
            </Button>
          </div>
        </div>
        <AnimatedImages />
      </div>
      <FeatureSection />
    </>
  );
};

export default HomePage;
