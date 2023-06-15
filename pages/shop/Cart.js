import React from "react";
import classes from "./Cart.module.css";
import CartPreview from "./CartPreview";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Checkout from "./Checkout";

const Cart = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "calc(100dvh - 7rem)" }}
      exit={{ height: 0 }}
      className={classes.container}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {showCheckout ? (
          <Checkout key={"checkout"} setShowCheckout={setShowCheckout} />
        ) : (
          <CartPreview key={"Cart Preview"} setShowCheckout={setShowCheckout} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cart;
