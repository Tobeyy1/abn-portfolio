import React from "react";
import classes from "./AddToCartModal.module.css";
import { frameSizingAndPrice, formatNumberWithCommas } from "../utils/utils";
import { useDispatch } from "react-redux";
import { cartItemsActions } from "../../store/store";
import { useState } from "react";
import { motion } from "framer-motion";

const AddToCartModal = ({ setShowAddToCartModal, name, image }) => {
  const [sizeIndex, setSizeIndex] = useState(0);
  const dispatch = useDispatch();

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(
      cartItemsActions.addToCart({
        name: name,
        image: image,
        amount: frameSizingAndPrice[sizeIndex].amount + 30000,
        size: frameSizingAndPrice[sizeIndex].size,
      })
    );
    setShowAddToCartModal(false);
  };
  return (
    <motion.div className={classes.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.backdrop}
        onClick={() => {
          setShowAddToCartModal(false);
        }}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className={classes.modal}
      >
        <form>
          <label htmlFor="Size" className={classes.label}>
            <span>Size</span>
            <div className={classes.select__and__amount}>
              <select
                name="Size"
                onChange={(e) => {
                  setSizeIndex(+e.target.value - 1);
                }}
              >
                {frameSizingAndPrice.map((item, index) => {
                  return (
                    <option value={index + 1} key={index}>
                      {item.size}
                    </option>
                  );
                })}
              </select>
              <span className={classes.amount}>
                ₦
                {formatNumberWithCommas(
                  frameSizingAndPrice[sizeIndex].amount + 30000
                )}
              </span>
            </div>
          </label>
          <button className={classes.form__cta} onClick={addToCartHandler}>
            CONFIRM
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddToCartModal;
