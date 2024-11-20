import React from "react";

const TopGlow = () => {
  return (
    <div
      className="absolute inset-x-0 mx-auto h-5 w-full max-w-7xl bg-white opacity-90 rounded-full filter blur-3xl"
      style={{ top: "-1.5rem" }}
    ></div>
  );
};

export default TopGlow;
