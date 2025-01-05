import React, { Suspense } from "react";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Technologies } from "../components/Technologies";
import { Contactme } from "../components/Contactme";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Blob from "../components/Blob.jsx";

export const HomePage = () => {
  return (
    <div className="setting-z-index space-y-10">
      <Navbar />
      {/* <div className="blob-overlay pt-20 mt-20">
        <Canvas>
          <ambientLight intensity={2}/>
          <OrbitControls/>
          <Suspense>
            <Blob/>
          </Suspense>
        </Canvas>
      </div> */}

      <div className="md:p-20  pt-20 pl-5  background-image">
        <div className="font-bold lg:text-8xl md:text-5xl sm:text-3xl text-2xl" >
          <p className="text-gray">Hi,</p>
          <div className="flex">
          <p className="text-gray">I'm </p>
          <p className="text-white pl-4">Vivek Tripathi</p>
          </div>
          
        </div>
        <div className="text-gray font-semibold lg:text-2xl md:text-lg sm:text-md text-sm pt-6 md:pl-2">
          A software engineer from Pune, MH.
        </div>

      </div>
      <Projects />
      <Technologies />
      <Contactme />
    </div>
  );
};
