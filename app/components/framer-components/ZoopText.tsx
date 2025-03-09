"use client";

import { motion } from "framer-motion";

const STAGGER = 0.01;

const ZoopText = ({
  children,
  className,
  textColor = "normal",
}: {
  children: string;
  className?: string;
  textColor?: "primary" | "secondary" | "normal";
}) => {
  const determineTextColor = () => {
    return textColor === "primary"
      ? "text-blue-600"
      : textColor === "secondary"
      ? "text-orange-500"
      : "";
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <div className={className}>
        {children
          .replace(/ /g, "\u00A0")
          .split("")
          .map((letter, i) => {
            return (
              <motion.span
                className={`inline-block ${determineTextColor()}`}
                variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                transition={{
                  delay: STAGGER * i,
                }}
                key={i}
              >
                {letter}
              </motion.span>
            );
          })}
      </div>
      <div className={`absolute inset-0 ${className}`}>
        {children
          .replace(/ /g, "\u00A0")
          .split("")
          .map((letter, i) => {
            return (
              <motion.span
                className={`inline-block ${determineTextColor()}`}
                variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                transition={{
                  delay: STAGGER * i,
                }}
                key={i}
              >
                {letter}
              </motion.span>
            );
          })}
      </div>
    </motion.div>
  );
};

export default ZoopText;
