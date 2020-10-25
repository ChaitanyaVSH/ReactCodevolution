import React from "react";
/**
 *  Tutorial: https://youtu.be/DNYXgtZBRPE?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=101
 *
 */

function HeroErrorBoundaryDemo({ heroName }) {
  console.log("Hero: " + heroName);
  if (heroName === "joker") {
    throw new Error("Not a Hero");
  }

  return (
    <div>
      <h1>Hero is: {heroName}</h1>
    </div>
  );
}

export default HeroErrorBoundaryDemo;
