import React from "react";
import AnimatedImages from "./AnimatedImages";
import AtlasButton from "./Button/AtlasButton";
import FloatingAstronaut from "./FloatingAstronaut";
import FadeInWhenVisible from "./framer-components/FadeInWhenVisible";
import ZoopText from "./framer-components/ZoopText";
import HeroStars from "./HeroStars";
import TopGlow from "./TopGlow";

const Home = () => {
  return (
    <div className="mt-40">
      <FloatingAstronaut />
      <TopGlow />
      <div className="flex justify-evenly items-center hero-section">
        <HeroStars count={80} />
        <div className="w-7/12">
          <h1>
            Explore the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent uppercase font-black">
              Cosmos
            </span>{" "}
            of
            <br />
            <ZoopText textColor="secondary" className="uppercase font-black">
              Earthly Destinations!
            </ZoopText>
          </h1>
          <p className="py-4">
            From alien eyes to human hearts—discover the wonders of Earth&apos;s
            countries through a galactic lens.
            <br />
            Your interstellar travel guide awaits!
          </p>
          <div className="flex jutify-start items-center">
            <AtlasButton href="/countries" type="primary">
              Start Your Journey!
            </AtlasButton>
          </div>
        </div>
        <FadeInWhenVisible>
          <AnimatedImages />
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Home;
