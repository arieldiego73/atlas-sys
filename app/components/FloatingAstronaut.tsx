"use client"; // This directive enables the component to run on the client side

import { useEffect, useRef } from "react";
import Image from "next/image";

const FloatingAstronaut = () => {
  const astronautRef = useRef<HTMLImageElement>(null); // Create a ref for the astronaut image
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container
  const currentPosition = useRef({ x: 0, y: 0 }); // Ref to keep track of current position

  useEffect(() => {
    const astronaut = astronautRef.current;
    const container = containerRef.current;

    if (astronaut && container) {
      // Set initial position based on the computed transform to avoid snapping
      const initialTransform = getComputedStyle(astronaut).transform;
      if (initialTransform !== "none") {
        const matrix = new DOMMatrix(initialTransform);
        currentPosition.current.x = matrix.m41; // Current translateX
        currentPosition.current.y = matrix.m42; // Current translateY
      }

      // Apply CSS transition for smooth movement
      astronaut.style.transition = "transform 10s cubic-bezier(0.5, 0, 0.5, 1)";

      // Start the floating animation
      floatAstronaut();
    }
  }, []);

  const floatAstronaut = () => {
    const astronaut = astronautRef.current;
    const container = containerRef.current;

    if (!astronaut || !container) {
      console.error("Astronaut image or container not found.");
      return;
    }

    const float = () => {
      // Get the container dimensions
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      // Get the astronaut dimensions
      const astronautWidth = astronaut.offsetWidth;
      const astronautHeight = astronaut.offsetHeight;

      // Generate random values for movement
      const randomX = Math.random() * 100 - 50; // Random X from -50 to 50
      const randomY = Math.random() * 100 - 50; // Random Y from -50 to 50

      // Calculate the new position
      let newX = currentPosition.current.x + randomX;
      let newY = currentPosition.current.y + randomY;

      // Limit the new position to the container's dimensions
      newX = Math.max(
        0, // Prevent moving beyond the left
        Math.min(newX, containerWidth - astronautWidth) // Prevent moving beyond the right
      );
      newY = Math.max(
        0, // Prevent moving beyond the top
        Math.min(newY, containerHeight - astronautHeight) // Prevent moving beyond the bottom
      );

      // Update the current position
      currentPosition.current.x = newX;
      currentPosition.current.y = newY;

      // Generate a random rotation
      const randomRotation = Math.random() * 65 - 45; // Random rotation from -45 to 20 degrees

      // Apply the new position and rotation smoothly using CSS transitions
      astronaut.style.transform = `translate(${newX}px, ${newY}px) rotate(${randomRotation}deg)`;

      // Recursively float after each transition
      setTimeout(float, 10000); // Move every 10 seconds
    };

    // Start the floating animation
    float();
  };

  return (
    <div
      ref={containerRef}
      className="absolute overflow-hidden w-full h-screen z-10 top-0 left-0 pointer-events-none"
    >
      <Image
        ref={astronautRef}
        src={"/astro.png"}
        className="absolute"
        style={{ top: "25%", left: "15%", transform: "rotate(15deg)" }}
        width="60"
        height="60"
        alt="Floating Astronaut"
      />
    </div>
  );
};

export default FloatingAstronaut;
