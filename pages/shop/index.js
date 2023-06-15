import React, { useMemo, useState } from "react";
import classes from "./Shop.module.css";
import Image from "next/image";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { allArt } from "../../components/utils/utils";
import AddToCartModal from "../../components/AddToCartModal/AddToCartModal";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Shop = () => {
  const artList = useMemo(() => allArt, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("right");

  const addToCartHandler = () => {
    setShowAddToCartModal(true);
  };

  const shopItems = artList.map((art, index) => {
    return (
      <motion.div
        initial={
          animationDirection === "right"
            ? { x: "100vw", rotate: "90deg", y: "100%", scale: 0.5 }
            : { x: "-100vw", rotate: "-90deg", y: "100%", scale: 0.5 }
        }
        animate={{ x: "0vw", rotate: "0deg", y: "0%", scale: 1 }}
        exit={
          animationDirection === "right"
            ? { x: "-100vw", rotate: "-90deg", y: "100%", scale: 0.5 }
            : { x: "100vw", rotate: "90deg", y: "100%", scale: 0.5 }
        }
        transition={{ duration: 0.5 }}
        className={classes.image__container}
        key={index}
      >
        <Image
          src={art.image}
          alt={"Art Item"}
          fill
          placeholder="blur"
          className={classes.image}
        />
        <LoadingSpinner />
      </motion.div>
    );
  });

  return (
    <div className={classes.container}>
      <AnimatePresence>
        {showAddToCartModal && (
          <AddToCartModal
            setShowAddToCartModal={setShowAddToCartModal}
            name={`Print #00${currentIndex + 1}`}
            image={artList[currentIndex].image}
          />
        )}
      </AnimatePresence>
      <section className={classes.top__section}>
        <div className={classes.name__and__amount}>
          <span className={classes.name}>Print #00{currentIndex + 1}</span>
          {/* <span className={classes.amount}>N40,000</span> */}
        </div>
        <button
          className={classes.add__to__cart}
          onClick={() => {
            addToCartHandler();
          }}
        >
          ADD TO CART
        </button>
      </section>
      <section className={classes.shop__items}>
        <AnimatePresence mode="popLayout">
          {shopItems[currentIndex]}
        </AnimatePresence>
      </section>
      <section className={classes.navigation__and__index}>
        <div className={classes.navigation}>
          <button
            className={`${classes.prev} ${
              currentIndex < 1 && classes.disabled__cta
            }`}
            onClick={() => {
              if (currentIndex + 1 > 1) {
                setAnimationDirection("left");
                setCurrentIndex((prev) => prev - 1);
              }
            }}
          >
            <BsFillCaretLeftFill />
          </button>
          <button
            className={`${classes.next} ${
              currentIndex + 1 === artList.length && classes.disabled__cta
            }`}
            onClick={() => {
              if (currentIndex + 1 < artList.length) {
                setAnimationDirection("right");
                setCurrentIndex((prev) => prev + 1);
              }
            }}
          >
            <BsFillCaretRightFill />
          </button>
        </div>
        <div className={classes.index}>
          {currentIndex + 1} out of {artList.length}
        </div>
      </section>
    </div>
  );
};

export default Shop;
