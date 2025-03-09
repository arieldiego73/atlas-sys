"use client";

import { useEffect, useState } from "react";

interface HeroStarsProp {
  count?: number;
}

const HeroStars: React.FC<HeroStarsProp> = ({ count = 50 }) => {
  const [stars, setStars] = useState<
    {
      x: number;
      y: number;
      size: number;
      opacity: number;
      duration: number;
      animName: string;
    }[]
  >([]);

  useEffect(() => {
    const generateStars = () => {
      const heroSection = document.querySelector(
        ".hero-stars"
      ) as HTMLDivElement;
      if (!heroSection) return;

      const starArray = Array.from({ length: count }).map((_, index) => {
        return {
          x: Math.random() * heroSection.offsetWidth,
          y: Math.random() * heroSection.offsetHeight,
          size: Math.random() * 5 + 10, // Random size between 10px and 15px
          opacity: Math.random() * 0.5 + 0.1, // Random opacity between 0.1 and 0.6
          duration: Math.random() * 2 + 2, // Random animation duration (2s - 4s)
          animName: `fadeInOut-${index}`, // Unique animation name
        };
      });

      setStars(starArray);
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    return () => {
      window.removeEventListener("resize", generateStars);
    };
  }, [count]);

  return (
    <div className="hero-stars absolute mx-auto h-full w-full -z-50 top-0 overflow-hidden opacity-30">
      {/* Dynamically inject unique keyframes for each star */}
      <style>
        {stars
          .map(
            (star) => `
            @keyframes ${star.animName} {
              0%, 100% { opacity: ${Math.random() * 0.5 + 0.1}; }
              50% { opacity: ${Math.random() * 0.5 + 0.1}; }
            }
          `
          )
          .join("\n")}
      </style>

      {stars.map((star, index) => (
        <svg
          key={index}
          viewBox="0 0 100 100"
          fill="white"
          style={{
            position: "absolute",
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            filter: `drop-shadow(0 0 ${star.size / 2}px white)`,
            animation: `${star.animName} ${star.duration}s ease-in-out infinite`,
          }}
        >
          <polygon points="50,5 60,40 95,50 60,60 50,95 40,60 5,50 40,40" />
        </svg>
      ))}
    </div>
  );
};

export default HeroStars;
