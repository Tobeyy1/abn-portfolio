import React, { useState, useRef } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";

const ContentWrapper = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const contentWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentWrapperRef,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    setProgress(latest);
  });
  return <section ref={contentWrapperRef}>{children}</section>;
};

export default ContentWrapper;
