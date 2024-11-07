"use client";

import { useEffect } from "react";
import anime from "animejs";

const HeroStars = () => {
  useEffect(() => {
    scatterStars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scatterStars = () => {
    const heroSection = document.querySelector(".hero-stars") as HTMLDivElement;

    const starCount = 20; // Number of stars to scatter

    if (!heroSection) {
      console.error("Hero section not found.");
      return;
    }

    for (let i = 0; i < starCount; i++) {
      const star = createStar();

      if (!star) {
        console.error("Star creation failed.");
        continue;
      }

      const x = Math.random() * heroSection.offsetWidth;
      const y = Math.random() * heroSection.offsetHeight;

      star.style.position = "absolute";
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      heroSection.appendChild(star);
    }

    applyAnimations();
  };

  const createStar = () => {
    const starSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    starSVG.setAttribute("viewBox", "0 0 100 100");
    starSVG.setAttribute("fill", "white");
    starSVG.setAttribute("class", "sparkle-svg");

    const randomSize = Math.random() * 5 + 10; // Random size between 10 and 15
    starSVG.setAttribute("width", randomSize.toString());
    starSVG.setAttribute("height", randomSize.toString());

    const initialOpacity = Math.random() * 0.5 + 0.1; // Random opacity between 0.1 and 0.6
    starSVG.setAttribute("opacity", initialOpacity.toString());

    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon.setAttribute(
      "points",
      "50,5 60,40 95,50 60,60 50,95 40,60 5,50 40,40"
    );

    starSVG.appendChild(polygon);
    return starSVG;
  };

  const applyAnimations = () => {
    const sparkles = document.querySelectorAll(".sparkle-svg");

    sparkles.forEach((sparkle) => {
      const randomBlur = Math.random() * 10; // Random blur intensity between 0 and 10

      anime({
        targets: sparkle,
        opacity: [
          {
            value: () => Math.random() * 0.5 + 0.1,
            duration: () => Math.random() * 100 + 500,
            easing: "easeInOutQuad",
          },
          {
            value: () => Math.random() * 0.5 + 0.1,
            duration: () => Math.random() * 100 + 500,
            easing: "easeInOutQuad",
          },
          {
            value: () => Math.random() * 0.5 + 0.1,
            duration: () => Math.random() * 100 + 500,
            easing: "easeInOutQuad",
          },
        ],
        filter: [
          {
            value: `drop-shadow(0 0 ${randomBlur}px white)`,
            duration: () => Math.random() * 100 + 500,
            easing: "easeInOutQuad",
          },
          {
            value: `drop-shadow(0 0 ${randomBlur * 2}px white)`,
            duration: () => Math.random() * 100 + 500,
            easing: "easeInOutQuad",
          },
          {
            value: `drop-shadow(0 0 ${randomBlur}px white)`,
            duration: () => Math.random() * 100 + 500,
            easing: "easeInOutQuad",
          },
        ],
        loop: true,
      });
    });
  };

  return (
    <div className="hero-stars absolute mx-auto h-full w-full -z-50 top-0 overflow-hidden opacity-30"></div>
  );
};

export default HeroStars;
