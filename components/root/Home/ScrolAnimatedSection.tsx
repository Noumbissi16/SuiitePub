"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ABCD from "./ABCD";

const ScrolAnimatedSection = () => {
  return (
    <div className="h-[400vh]">
      <div className="large-screen-layout max-md:hidden flex justify-between ">
        <div>
          <div className="h-screen grid place-items-center grid-cols-2">
            <ABCD />
          </div>
          <div className="h-screen grid place-items-center grid-cols-2">
            <ABCD />
          </div>
          <div className="h-screen grid place-items-center grid-cols-2">
            <ABCD />
          </div>
        </div>
        <div className="sticky top-20 h-fit ">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">3</div>
        </div>
      </div>

      <div className="small-screen-layout hidden max-md:block">
        <div>
          <div className="space-y-4">
            content 1<div className=" ">1 </div>
          </div>
          <div className="space-y-4">
            content 2<div className="  "> 2</div>
          </div>
          <div className="space-y-4">
            content 3<div className="  "> 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrolAnimatedSection;
