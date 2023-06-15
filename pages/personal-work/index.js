import React, { useEffect, useMemo, useRef, useState } from "react";
import classes from "./PersonalWork.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import PersonalArt from "../../components/PersonalArt";
import Image from "next/image";
import { allArt } from "../../components/utils/utils";
import { motion, AnimatePresence } from "framer-motion";

const PersonalWork = () => {
  const artList = useMemo(() => allArt, []);
  const [activeNav, setActiveNav] = useState("all");
  const [active, setActive] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [currentArtList, setCurrentArtList] = useState(artList);
  const mobileViewRef = useRef(null);

  const activeNavHandler = (keyword) => {
    setActiveNav(keyword);
  };

  const navigationHandler = (direction) => {
    if (direction === "1" && active < 90) {
      setActive((prev) => prev + 10);
    }
    if (direction === "-1" && active > 0) {
      setActive((prev) => prev - 10);
    }
  };

  useEffect(() => {
    const currentArtListHandler = () => {
      if (activeNav === "all") {
        setCurrentArtList(artList);
      } else if (activeNav === "personal") {
        const personalArtList = artList.filter(
          (art) => art.category === "personal"
        );
        setCurrentArtList(personalArtList);
      } else if (activeNav === "client") {
        const clientArtList = artList.filter(
          (art) => art.category === "client"
        );
        setCurrentArtList(clientArtList);
      }
    };
    currentArtListHandler();
  }, [activeNav, artList]);

  const leftArtList = currentArtList
    .slice(0, Math.round(currentArtList.length / 2))
    .map((art, index) => (
      <PersonalArt
        setShowPreview={setShowPreview}
        key={`left${index + 1}`}
        image={art.image}
      />
    ));

  const rightArtList = currentArtList
    .slice(Math.round(currentArtList.length / 2), currentArtList.length)
    .map((art, index) => (
      <PersonalArt
        setShowPreview={setShowPreview}
        key={`right${index + 1}`}
        image={art.image}
      />
    ));

  const allArtList = [...leftArtList, ...rightArtList];

  return (
    <div className={classes.container}>
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            className={classes.image__preview}
            onClick={() => {
              setShowPreview(false);
            }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className={classes.image__container}
            >
              <Image
                src={showPreview ? showPreview : "#"}
                alt={"Art"}
                fill
                placeholder="blur"
                className={classes.image}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <button
            className={
              activeNav === "all" ? classes.active__nav__cta : classes.nav__cta
            }
            onClick={() => activeNavHandler("all")}
          >
            All
          </button>
          <button
            className={
              activeNav === "personal"
                ? classes.active__nav__cta
                : classes.nav__cta
            }
            onClick={() => activeNavHandler("personal")}
          >
            Personal
          </button>
          <button
            className={
              activeNav === "client"
                ? classes.active__nav__cta
                : classes.nav__cta
            }
            onClick={() => activeNavHandler("client")}
          >
            Client Work
          </button>
        </nav>
      </header>

      {activeNav && (
        <div className={classes.body}>
          <div className={classes.navigation}>
            <button
              className={classes.nav__up__cta}
              onClick={() => navigationHandler("1")}
            >
              <AiOutlineArrowUp />
            </button>
            <span>Click to Navigate</span>
            <button
              className={classes.nav__down__cta}
              onClick={() => navigationHandler("-1")}
            >
              <AiOutlineArrowDown />
            </button>
          </div>
          <section className={classes.left}>
            <AnimatePresence initial={false} mode="sync">
              {leftArtList.map(
                (art, index) => active < (index + 1) * 10 && art
              )}
            </AnimatePresence>
            <span className={classes.overlay}></span>
          </section>
          <section className={classes.right}>
            <AnimatePresence initial={false}>
              {rightArtList.map(
                (art, index) => active < (index + 1) * 10 && art
              )}
            </AnimatePresence>
            <span className={classes.overlay}></span>
          </section>
          <section className={classes.mobile__view} ref={mobileViewRef}>
            {allArtList.map((art) => art)}
          </section>
        </div>
      )}
    </div>
  );
};

export default PersonalWork;
