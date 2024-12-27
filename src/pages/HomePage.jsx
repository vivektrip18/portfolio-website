import React from "react";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {

  return (
    <div className="gradient pr-6">
      <Navbar />

      <div className="p-10">
        <div className="text-white font-bold text-8xl" >
          Hello, I'm Vivek Tripathi
        </div>
        <div className="text-white font-semibold text-2xl pt-6">
          I'm a software engineer from Pune, MH
        </div>
      </div>

    </div>
  );
};
