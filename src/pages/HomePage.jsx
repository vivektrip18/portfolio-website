import React from "react";
import { Navbar } from "../components/Navbar";
import { Blob } from "../components/Blob";

import { Projects } from "../components/Projects";
import { Technologies } from "../components/Technologies";

export const HomePage = () => {


  return (
    <div className="gradient ">
      <Navbar />
      <div className="p-20  m-10 background-image">
        <div className="text-white font-bold text-8xl" >
          <p>Hi,</p>
          I'm Vivek Tripathi
        </div>
        {/* <div className="blob-overlay justify-center items-center">
          <Blob />
        </div> */}

        <div className="text-white font-semibold text-2xl pt-6 pl-2">
          A software engineer from Pune, MH.
        </div>

      </div>
      <Projects/>
      <Technologies/>
    </div>
  );
};
