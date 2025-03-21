"use client";

import { motion, useInView, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import ABCD from "./ABCD";
import D from "./d";

const fadeUpVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,

    transition: { duration: 0.25 },
  },
};

const ScrolAnimatedSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView1 = useInView(ref1, { amount: 0.6 });
  const isInView2 = useInView(ref2, { amount: 0.6 });
  const isInView3 = useInView(ref3, { amount: 0.6 });
  let ActiveComponent = null;
  if (isInView1) ActiveComponent = ABCD;
  if (isInView2) ActiveComponent = D;
  if (isInView3) ActiveComponent = ABCD;
  useEffect(() => {
    console.log({ isInView2 });
  }, [isInView2]);

  return (
    <div className="h-fit max-md:h-fit ">
      <div className="large-screen-layout max-md:hidden flex justify-between  ">
        <div className="w-[40%]">
          <div
            ref={containerRef}
            className="grid  place-items-center h-[calc(80vh-80px)]"
          >
            <div ref={ref1}>
              <ABCD />
            </div>
          </div>
          <div
            ref={containerRef}
            className=" grid  place-items-center h-[calc(80vh-80px)]"
          >
            <div ref={ref2}>
              <ABCD />
            </div>
          </div>
          <div
            ref={containerRef}
            className=" grid  place-items-center h-[calc(80vh-80px)]"
          >
            <div ref={ref3}>
              <ABCD />
            </div>
          </div>
        </div>
        <div className="sticky top-20 h-[calc(80vh-80px)] flex justify-center items-center w-[52%] -z-10">
          <div className=" h-1/2 rounded-lg grid place-items-center w-full">
            <AnimatePresence mode="wait">
              {ActiveComponent && (
                <motion.div
                  key={ActiveComponent.name}
                  variants={fadeUpVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="p-4 bg-blue-200 shadow-lg rounded-md h-full w-full flex justify-center items-center"
                >
                  <ActiveComponent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="small-screen-layout hidden max-md:block">
        <div>
          <div className="space-y-4">
            <ABCD />
            <div className=" ">
              <ABCD />
            </div>
          </div>
          <div className="space-y-4">
            <ABCD />
            <div className="  ">
              <ABCD />
            </div>
          </div>
          <div className="space-y-4">
            <ABCD />
            <div className="  ">
              <ABCD />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrolAnimatedSection;
