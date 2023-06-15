import React from "react";
import classes from "./HeroFooter.module.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { motion } from "framer-motion";

const HeroFooter = ({ theme }) => {
  return (
    <div
      className={
        theme === "light" ? classes.light__container : classes.dark__container
      }
    >
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0,
        }}
        href="https://instagram.com/artsbynonso"
        target="_blank"
        rel="noreferrer"
        className={classes.social__link}
      >
        <span>INSTAGRAM</span>
        <span className={classes.icon}>
          <AiOutlineInstagram />
        </span>
        <div>
          <span className="material-symbols-rounded">north_east</span>
        </div>
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
        }}
        href="https://twitter.com/artsbynonso"
        target="_blank"
        rel="noreferrer"
        className={classes.social__link}
      >
        <span>TWITTER</span>
        <span className={classes.icon}>
          <AiOutlineTwitter />
        </span>
        <div>
          <span className="material-symbols-rounded">north_east</span>
        </div>
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        href="mailto:artsbynonso@gmail.com"
        className={classes.social__link}
      >
        <span>EMAIL</span>
        <span className={classes.icon}>
          <AiOutlineMail />
        </span>
        <div>
          <span className="material-symbols-rounded">north_east</span>
        </div>
      </motion.a>
    </div>
  );
};

export default HeroFooter;
