import React from "react";
import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
import {
  formatNumberWithCommas,
  totalAmountHandler,
} from "../../components/utils/utils";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";

const Checkout = ({ setShowCheckout }) => {
  const cartItems = useSelector((state) => state.cartItems);
  //   console.log(cartItems);

  const message = `Hello,
  This is a purchase from your store
  I'd like to make an order of ${cartItems.length} paintings.${cartItems.map(
    (item, index) =>
      `
      ${index + 1}. ${item.name} in size ${
        item.size
      } - ₦${formatNumberWithCommas(item.amount)}`
  )}
  Total Amount - ₦${formatNumberWithCommas(totalAmountHandler(cartItems))}`;

  const phoneNumber = "2349037989096";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  console.log(whatsappLink);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        duration: 0.5,
      }}
      className={classes.container}
    >
      <header className={classes.header} onClick={() => setShowCheckout(false)}>
        <span className={classes.back__arrow}>
          <BiArrowBack />
        </span>
        BACK
      </header>
      <section className={classes.body}>
        <p className={classes.order__text}>
          Hello, <br />
          I&apos;d like to make an order of {cartItems.length} paintings.
          {cartItems.map((item, index) => {
            return (
              <span key={index}>
                {index + 1}. {item.name} in size {item.size} - ₦
                {formatNumberWithCommas(item.amount)}
              </span>
            );
          })}{" "}
          <br />
          Total Amount - ₦
          {formatNumberWithCommas(totalAmountHandler(cartItems))}
        </p>
      </section>
      <section className={classes.footer}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className={classes.checkout__cta}
        >
          <FaWhatsapp />
          ORDER VIA WHATSAPP
        </a>
      </section>
    </motion.div>
  );
};

export default Checkout;
