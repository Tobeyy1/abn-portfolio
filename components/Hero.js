import React from "react";
import Link from "next/link";
import classes from "./Hero.module.css";
import { motion } from "framer-motion";
// import ScrambledWord from "./ScrambledWord/ScrambledWord";

const Hero = () => {
  return (
    <header className={classes.container}>
      <h1 className={classes.name}>Arts By Nonso</h1>
      {/* <ScrambledWord word="Table" /> */}
    </header>
  );
};

export default Hero;
