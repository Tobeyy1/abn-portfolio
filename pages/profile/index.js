import React, { useState } from "react";
import classes from "./Profile.module.css";
import NONSO from "../../images/nonso.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import ContentWrapper from "../../components/ContentWrapper";
import { BsPhoneFill } from "react-icons/bs";
import Footer from "../../components/HeroFooter";

const Profile = () => {
  const [showFooter, setShowFooter] = useState(false);
  return (
    <div className={classes.container}>
      <section className={classes.introduction}>
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className={classes.image__container}
        >
          <Image src={NONSO} alt="NONSO" fill className={classes.image} />
        </motion.div>
        <div>
          <p>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.6,
              }}
            >
              Hi,
            </motion.span>
          </p>
          <p>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.7,
              }}
            >
              I&apos;m Nonso.
            </motion.span>
          </p>{" "}
          <p>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.8,
              }}
            >
              Digital{" "}
              <Typewriter
                options={{
                  cursor: " ",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(150)
                    .typeString("Artist.")
                    .deleteChars(7)
                    .typeString("Illustrator.")
                    .start();
                }}
              />
            </motion.span>
          </p>
        </div>
      </section>
      <ContentWrapper>
        <section className={classes.past}>
          <p>
            <span>
              Nwangwu Wilfred Chinonso{" "}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </span>{" "}
            is a talented digital artist hailing from Imo state, Nigeria.
            Currently a student at the{" "}
            <span>
              University of Nigeria, Nsukka
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
            </span>
            , Nonso&apos;s love for the arts began at a young age and has only
            grown stronger over the years.
          </p>
        </section>
      </ContentWrapper>
      <ContentWrapper>
        <section className={classes.experience}>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [1, 1.3, 1, 1.15, 1], opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            5
          </motion.span>
          <p>
            With over 5 years of experience as a freelance illustrator, Nonso
            has honed his skills and gained a reputation as a skilled and
            versatile artist. Having worked on a range of projects including
            music cover arts, character illustrations, book covers, flyers,
            posters, and NFT artworks, Nonso is no stranger to the world of
            digital art
          </p>
        </section>
      </ContentWrapper>
      <ContentWrapper>
        <section className={classes.inspiration}>
          <p>
            With a passion for music and a desire to share his experiences and
            views through his art, Nonso&apos;s creations tell a story and leave
            a lasting impression on those who view them.
          </p>
        </section>
      </ContentWrapper>
      <ContentWrapper>
        <section className={classes.portfolio}>
          <p>
            Whether working on a commission or creating something purely for
            himself, Nwangwu approaches each project with creativity,
            dedication, and a commitment to excellence. His portfolio showcases
            a wide range of styles and techniques, highlighting his versatility
            and skill as an artist.
          </p>
        </section>
      </ContentWrapper>
      <ContentWrapper>
        <section className={classes.future__outlook}>
          <p>
            With a bright future ahead of him, Nwangwu Wilfred Chinonso is
            definitely an artist to watch in the world of digital art.
          </p>
        </section>
      </ContentWrapper>
      <ContentWrapper>
        <section className={classes.contact}>
          <div className={classes.lets__talk}>
            <p>
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                Let&apos;s
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                talk
              </motion.span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={classes.underline}
              ></motion.span>
            </p>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              onAnimationComplete={() => {
                setShowFooter(true);
              }}
            >
              <BsPhoneFill />
            </motion.span>
          </div>
          {<Footer theme={"dark"} />}
        </section>
      </ContentWrapper>
    </div>
  );
};

export default Profile;
