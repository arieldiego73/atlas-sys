"use client"; // This directive enables the component to run on the client side

import { useEffect, useRef } from "react";
import Image from "next/image";

const FloatingAstronaut = () => {
  const astronautRef = useRef<HTMLImageElement>(null); // Create a ref for the astronaut image
  const currentPosition = useRef({ x: 0, y: 0 }); // Ref to keep track of current position

  useEffect(() => {
    const astronaut = astronautRef.current;

    if (astronaut) {
      // Set initial position based on the computed transform to avoid snapping
      const initialTransform = getComputedStyle(astronaut).transform;
      if (initialTransform !== "none") {
        const matrix = new DOMMatrix(initialTransform);
        currentPosition.current.x = matrix.m41; // Current translateX
        currentPosition.current.y = matrix.m42; // Current translateY
      }

      // Apply CSS transition for smooth movement
      astronaut.style.transition = "transform 5s cubic-bezier(0.5, 0, 0.5, 1)"; // Smooth transitions over 5 seconds

      // Start the floating animation
      floatAstronaut();
    }
  }, []);

  const floatAstronaut = () => {
    const astronaut = astronautRef.current;

    if (!astronaut) {
      console.error("Astronaut image not found.");
      return;
    }

    // Function to float the astronaut randomly within viewport bounds
    const float = () => {
      // Get the viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Get the astronaut dimensions
      const astronautWidth = astronaut.offsetWidth;
      const astronautHeight = astronaut.offsetHeight;

      // Generate random values for movement
      const randomX = Math.random() * 100 - 50; // Random X from -50 to 50
      const randomY = Math.random() * 100 - 50; // Random Y from -50 to 50

      // Calculate the new position
      const newX = currentPosition.current.x + randomX;
      const newY = currentPosition.current.y + randomY;

      // Limit the new position to the viewport dimensions
      currentPosition.current.x = Math.max(
        0, // Prevent moving beyond the left
        Math.min(newX, viewportWidth - astronautWidth) // Prevent moving beyond the right
      );
      currentPosition.current.y = Math.max(
        0, // Prevent moving beyond the top
        Math.min(newY, viewportHeight - astronautHeight) // Prevent moving beyond the bottom
      );

      // Generate a random rotation
      const randomRotation = Math.random() * 20 - 5; // Random rotation from -5 to 5 degrees

      // Apply the new position and rotation smoothly using CSS transitions
      astronaut.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px) rotate(${randomRotation}deg)`;

      // Recursively float after each transition
      setTimeout(float, 5000); // Move every 5 seconds
    };

    // Start the floating animation
    float();
  };

  return (
    <div className="absolute overflow-hidden w-full h-full z-10">
      <Image
        ref={astronautRef}
        src={"/astro.png"}
        className="absolute"
        style={{ top: "55%", left: "20%" }}
        width="60"
        height="60"
        alt="Floating Astronaut"
      />
    </div>
  );
};

export default FloatingAstronaut;
