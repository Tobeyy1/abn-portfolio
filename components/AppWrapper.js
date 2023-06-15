import React, { useState, useRef, useEffect } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import classes from "./AppWrapper.module.css";
import bg1 from "../images/home/1.jpg";
import bg2 from "../images/home/2.jpg";
import bg3 from "../images/home/3.jpg";
import bg4 from "../images/home/4.jpg";
import Image from "next/image";
import { useRouter } from "next/router";

const AppWrapper = ({ children }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentBgImage, setCurrentBgImage] = useState(0);

  const router = useRouter();

  const bgs = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % bgs.length);
    }, 4000);

    return () => clearInterval(bgTimer);
  }, [bgs]);

  return (
    <div className={classes.container}>
      {showWelcome ? <Welcome /> : <NavBar />}
      {!showWelcome && children}
      {router.pathname === "/" && (
        <Image
          src={bgs[currentBgImage]}
          alt="background"
          fill
          className={classes.image}
        />
      )}
    </div>
  );
};

export default AppWrapper;
