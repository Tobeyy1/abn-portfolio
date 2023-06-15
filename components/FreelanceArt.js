import React from "react";
import classes from "./FreelanceArt.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const FreelanceArt = ({ image, alt, description, artist, year, even }) => {
  return (
    <div className={even ? classes.even__container : classes.container}>
      <section className={classes.image__container}>
        <motion.div
          initial={{ scale: 1.5 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            placeholder="blur"
            className={classes.image}
          />
        </motion.div>
      </section>
      <section className={classes.text}>
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          {description}
          <span className={classes.artist}>{artist}</span>
          <span className={classes.year}>{year}</span>
        </motion.p>
      </section>
    </div>
  );
};

export default FreelanceArt;
