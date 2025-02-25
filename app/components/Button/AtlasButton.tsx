"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface AtlasButtonProps {
  children: string;
  href?: string;
  disabled?: boolean;
  type?: "primary" | "secondary" | "tertiary";
  targetBlank?: boolean;
}

const AtlasButton: React.FC<AtlasButtonProps> = (props) => {
  const determineHoverBg = () => {
    return props.type === "primary"
      ? "#1c64f2"
      : props.type === "secondary"
      ? "#ff5a1f"
      : "#374151";
  };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{
        filter: `drop-shadow(0 0 4rem ${determineHoverBg()})`,
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      className={`${
        props.type === "primary"
          ? "bg-blue-600"
          : props.type === "secondary"
          ? "bg-orange-500"
          : "bg-gray-700"
      } px-4 py-2 text-white rounded-md relative`}
      disabled={props.disabled === undefined ? false : props.disabled}
      style={{ filter: `drop-shadow(0 0 3rem ${determineHoverBg()})` }}
    >
      <span style={{ filter: "drop-shadow(0 0 1px currentcolor)" }}>
        {props.href === undefined ? (
          props.children
        ) : (
          <Link
            href={props.href}
            target={props.targetBlank ? "_blank" : "_self"}
          >
            {props.children}
          </Link>
        )}
      </span>
    </motion.button>
  );
};

export default AtlasButton;
