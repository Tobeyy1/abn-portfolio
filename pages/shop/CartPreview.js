import React from "react";
import classes from "./CartPreview.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useSelector } from "react-redux";
import { formatNumberWithCommas } from "../../components/utils/utils";
import { FaTrash } from "react-icons/fa";
import { totalAmountHandler } from "../../components/utils/utils";

const CartPreview = ({ setShowCheckout }) => {
  const cartItems = useSelector((state) => state.cartItems);
  // console.log(cartItems);

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{
        duration: 0.5,
      }}
      className={classes.container}
    >
      <header className={classes.header}>Cart</header>
      <section className={classes.body}>
        {cartItems?.map((item, index) => {
          return (
            <div className={classes.item} key={index}>
              <div className={classes.image__container}>
                <Image
                  className={classes.image}
                  src={item.image}
                  alt={item.name}
                  fill
                />
              </div>
              <div className={classes.item__details}>
                <div className={classes.name__and__amount}>
                  <span className={classes.item__name}>{item.name}</span>
                  <span className={classes.amount}>
                    ₦{formatNumberWithCommas(item.amount)}
                  </span>
                </div>
                <span className={classes.delete__icon}>
                  <FaTrash />
                </span>
              </div>
            </div>
          );
        })}
      </section>
      <motion.section
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        exit={{ y: "100%" }}
        className={classes.footer}
      >
        <button
          className={classes.checkout__cta}
          onClick={() => setShowCheckout(true)}
        >
          CHECKOUT - ₦{formatNumberWithCommas(totalAmountHandler(cartItems))}
        </button>
      </motion.section>
    </motion.div>
  );
};

export default CartPreview;
