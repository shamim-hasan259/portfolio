"use client";
import { TypeAnimation } from "react-type-animation";
const SlideText = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        500,
        "Frontend Developer",
        1000,
        "Backend Developer",
        1000,
        "MERN Stack Developer",
        1000,
        "Problem Solver",
        1000,
        "UI/UX Enthusiast",
        ,
      ]}
      speed={20}
      className="text-xl md:text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      repeat={Infinity}
    />
  );
};

export default SlideText;
