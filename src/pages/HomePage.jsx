import React from "react";
import { Navbar } from "../components/Navbar";
import { Blob } from "../components/Blob";
import { motion } from "motion/react";

export const HomePage = () => {


  return (
    <div className="gradient pr-6">
      <Navbar />
      <div className="p-20 background-image">
        <div className="text-white font-bold text-8xl" >
          Hello, I'm Vivek Tripathi
        </div>
        <div className="blob-overlay justify-center items-center">
          <Blob />
        </div>

        <div className="text-white font-semibold text-2xl pt-6 pl-2">
          I'm a software engineer from Pune, MH
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
      </div>






    </div>
  );
};
