import React from "react";
import classes from "./Welcome.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { welcomeImages } from "./utils/utils";

const Welcome = () => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        {welcomeImages.map((image, index) => (
          <div className={classes.image__container} key={index}>
            <Image
              src={image}
              alt="A Painting"
              fill
              placeholder="blur"
              className={classes.image}
            />
          </div>
        ))}
      </div>
      <h1
        className={`${classes.name} ${
          router.pathname === "/" && classes.welcome__exit__animation
        }`}
      >
        Arts By Nonso
      </h1>
    </div>
  );
};

export default Welcome;
