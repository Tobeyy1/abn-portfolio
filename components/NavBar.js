import React, { useEffect, useState } from "react";
import classes from "./NavBar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import Cart from "../pages/shop/Cart";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [pathName, setPathName] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  const mql = window.matchMedia("(max-width: 500px)");

  const router = useRouter();
  useEffect(() => {
    setPathName(router.pathname);
  }, [router]);

  useEffect(() => {
    if (mql.matches) {
      setMobileView(true);
    }
    mql.addEventListener("change", (e) => {
      const mobileLayout = e.matches;
      if (mobileLayout) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    });
    return mql.removeEventListener("change", (e) => {
      const mobileLayout = e.matches;
      if (mobileLayout) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    });
  }, [mql]);

  const menuStateHandler = () => {
    setShowMenu(!showMenu);
    setShowCart(false);
    // setShowLinks(!showLinks);
  };

  return (
    <nav className={classes.container}>
      <p className={classes.name}>
        {pathName === "/"
          ? "Chinonso Nwangwu"
          : pathName === "/shop"
          ? "Shop"
          : "Arts By Nonso"}
      </p>
      {pathName === "/shop" && (
        <span className={classes.cart__toggler}>
          <span className={classes.cart__item__count}>{cartItems?.length}</span>
          {<HiOutlineShoppingCart onClick={() => setShowCart(!showCart)} />}
        </span>
      )}
      <button
        className={classes.menu__toggler}
        onClick={() => {
          menuStateHandler();
        }}
      >
        <div>
          <AnimatePresence mode="wait">
            {showMenu ? (
              <motion.p
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.1,
                }}
                key="close"
              >
                CLOSE
              </motion.p>
            ) : (
              <motion.p
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.1,
                }}
                key="menu"
              >
                MENU
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </button>

      <AnimatePresence>
        {showMenu && (
          <div className={classes.list__container}>
            <motion.ul
              initial={mobileView ? { x: "100%" } : { y: "100%" }}
              animate={mobileView ? { x: 0 } : { y: 0 }}
              exit={mobileView ? { x: "-100%" } : { y: "-100%" }}
              transition={{
                duration: 0.5,
              }}
              onAnimationComplete={() => setShowLinks(true)}
              key="black__link__list"
              className={classes.black__link__list}
            >
              {showLinks && pathName !== "/" && (
                <motion.li
                  initial={
                    mobileView ? { x: "-100vw" } : { y: "-90vh", opacity: 0 }
                  }
                  animate={mobileView ? { x: 0 } : { y: 0, opacity: 1 }}
                  exit={mobileView ? { x: "100vw" } : { y: "10vh" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={classes.list__item}
                >
                  <Link href="/" onClick={() => menuStateHandler()}>
                    Home
                  </Link>
                </motion.li>
              )}
              {showLinks && pathName !== "/profile" && (
                <motion.li
                  initial={
                    mobileView ? { x: "-100vw" } : { y: "-90vh", opacity: 0 }
                  }
                  animate={mobileView ? { x: 0 } : { y: 0, opacity: 1 }}
                  exit={mobileView ? { x: "100vw" } : { y: "10vh" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={classes.list__item}
                >
                  <Link href="/profile" onClick={() => menuStateHandler()}>
                    Profile
                  </Link>
                </motion.li>
              )}
              {showLinks && pathName !== "/personal-work" && (
                <motion.li
                  initial={
                    mobileView ? { x: "-100vw" } : { y: "-90vh", opacity: 0 }
                  }
                  animate={mobileView ? { x: 0 } : { y: 0, opacity: 1 }}
                  exit={mobileView ? { x: "100vw" } : { y: "10vh" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={classes.list__item}
                >
                  <Link
                    href="/personal-work"
                    onClick={() => menuStateHandler()}
                  >
                    Work
                  </Link>
                </motion.li>
              )}

              {showLinks && pathName !== "/shop" && (
                <motion.li
                  initial={
                    mobileView ? { x: "-100vw" } : { y: "-90vh", opacity: 0 }
                  }
                  animate={mobileView ? { x: 0 } : { y: 0, opacity: 1 }}
                  exit={mobileView ? { x: "100vw" } : { y: "10vh" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={classes.list__item}
                >
                  <div onClick={() => menuStateHandler()}>
                    <Link href="/shop" onClick={() => menuStateHandler()}>
                      Shop
                    </Link>
                  </div>
                </motion.li>
              )}
            </motion.ul>
            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            {/* /////// white__link__list //////////////////// */}
            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <motion.ul
              initial={mobileView ? { x: "-100%" } : { y: "-100%" }}
              animate={mobileView ? { x: 0 } : { y: 0 }}
              exit={mobileView ? { x: "100%" } : { y: "100%" }}
              transition={{
                duration: 0.5,
              }}
              key="white__link__list"
              className={classes.white__link__list}
            >
              {showLinks && (
                <motion.li
                  initial={
                    mobileView ? { x: "100vw" } : { y: "100%", opacity: 0 }
                  }
                  animate={mobileView ? { x: 0 } : { y: 0, opacity: 1 }}
                  exit={mobileView ? { x: "-100vw" } : { y: "-90vh" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={classes.list__item}
                >
                  <Link
                    href={"https://instagram.com/artsbynonso"}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => menuStateHandler()}
                  >
                    Instagram
                  </Link>
                </motion.li>
              )}
              {showLinks && (
                <motion.li
                  initial={
                    mobileView ? { x: "100vw" } : { y: "100%", opacity: 0 }
                  }
                  animate={mobileView ? { x: 0 } : { y: 0, opacity: 1 }}
                  exit={mobileView ? { x: "-100vw" } : { y: "-90vh" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={classes.list__item}
                >
                  <Link
                    href={"https://twitter.com/artsbynonso"}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => menuStateHandler()}
                  >
                    Twitter
                  </Link>
                </motion.li>
              )}
              {showLinks && (
                <motion.li
                  initial={
                    mobileView ? { x: "100vw" } : { y: "100%", opacity: 0 }
                  }
                  animate={mobileView ? { x: 0 } : { y: 0, opacity: 1 }}
                  exit={mobileView ? { x: "-100vw" } : { y: "-90vh" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={classes.list__item}
                >
                  <Link
                    href="mailto:artsbynonso@gmail.com"
                    onClick={() => menuStateHandler()}
                  >
                    Email
                  </Link>
                </motion.li>
              )}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </nav>
  );
};

export default NavBar;
