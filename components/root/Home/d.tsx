"use client";

import type React from "react";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function D() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <div>
      <div style={container}>
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ position: "relative", height: "100%", width: "100%" }}
        >
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            style={nav}
          >
            <motion.div style={background} variants={sidebarVariants} />
            <MenuToggle isOpen={isOpen} />
          </motion.nav>
          <motion.p
            style={textStyle}
            initial={false}
            animate={
              isOpen
                ? {
                    color: "black",
                    transition: {
                      type: "spring",
                      stiffness: 20,
                      restDelta: 2,
                    },
                  }
                : {
                    color: "white",
                    transition: {
                      delay: 0.2,
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    },
                  }
            }
            transition={{
              type: "spring",
              stiffness: 20,
              restDelta: 2,
            }}
          >
            This is the content
          </motion.p>
        </div>
      </div>
    </div>
  );
}

const sidebarVariants = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MenuToggle = ({ isOpen }: { isOpen: boolean }) => (
  <button style={toggleContainer}>button</button>
);

/**
 * ==============   Styles   ================
 */

// Add new text style
const textStyle: React.CSSProperties = {
  position: "absolute",
  left: "100px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  pointerEvents: "none",
};

const container: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  width: 320,
  maxWidth: "100%",
  height: 80,
  backgroundColor: "blue",
  borderRadius: 20,
  overflow: "hidden",
};

const nav: React.CSSProperties = {
  width: 300,
};

const background: React.CSSProperties = {
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: "100%",
};

const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 18,
  left: 15,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",

  zIndex: 3, // Higher than text
  pointerEvents: "auto", // Ensure button remains clickable
};

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
