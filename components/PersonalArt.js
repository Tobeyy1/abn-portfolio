import React from "react";
// import classes from "./PersonalArt.module.css";
import classes from "../pages/personal-work/PersonalWork.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const PersonalArt = ({ image, setShowPreview }) => {
  return (
    <motion.div
      initial={{ top: "100%", opacity: 0 }}
      animate={{ top: "0%", opacity: 1 }}
      exit={{ top: "100%", opacity: 0 }}
      className={classes.image__container}
      key={image}
      onClick={() => setShowPreview(image)}
    >
      <Image
        src={image}
        className={classes.image}
        fill
        placeholder="blur"
        alt="Art"
      />
    </motion.div>
  );
};

export default PersonalArt;
