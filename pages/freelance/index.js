import React from "react";
import Typewriter from "typewriter-effect";
import classes from "./Freelance.module.css";
import ONE from "../../images/freelance/ONE.jpg";
import TWO from "../../images/freelance/TWO.jpg";
import THREE from "../../images/freelance/THREE.jpg";
import FOUR from "../../images/freelance/FOUR.jpg";
import FIVE from "../../images/freelance/FIVE.jpg";
import SIX from "../../images/freelance/SIX.jpg";
import SEVEN from "../../images/freelance/SEVEN.jpg";
import EIGHT from "../../images/freelance/EIGHT.jpg";
import NINE from "../../images/freelance/NINE.jpg";
import TEN from "../../images/freelance/TEN.jpg";
import ELEVEN from "../../images/freelance/ELEVEN.jpg";
import TWELVE from "../../images/freelance/TWELVE.jpg";
import THIRTEEN from "../../images/freelance/THIRTEEN.jpg";

import FreelanceArt from "../../components/FreelanceArt";

const artDetails = [
  {
    image: ONE,
    alt: "Music Cover for Cant be Love by 3gar baby",
    description: "Can't Be Love",
    artist: "3gar Baby",
    year: "2023",
  },
  {
    image: TWO,
    alt: "Cover Art for Thug Nigga Life by Rich Plug",
    description: "Thug Nigga Life (Album)",
    artist: "Rich Plug",
    year: "2023",
  },
  {
    image: THREE,
    alt: "Music Cover for My Bro by Jeriq",
    description: "My Bro",
    artist: "Jeriq",
    year: "2023",
  },
  {
    image: FOUR,
    alt: "Music Cover for Restoration by Young God",
    description: "Restoration (EP)",
    artist: "Young God",
    year: "2023",
  },
  {
    image: FIVE,
    alt: "Music Cover for Girl Like You by King K and King VI",
    description: "Girl Like You",
    artist: "King K and King VI",
    year: "2023",
  },
  {
    image: SIX,
    alt: "Music Cover for Hustle Na Must by 3gar baby",
    description: "Hustle Na Must",
    artist: "3gar Baby",
    year: "2023",
  },

  {
    image: SEVEN,
    alt: "Music Cover for Distant Yet Outside by Promise",
    description: "Distant Yet Outside",
    artist: "Promise",
    year: "2022",
  },
  {
    image: EIGHT,
    alt: "Music Cover for Billion Dollar Dream (Album Deluxe) by Jeriq",
    description: "Billion Dollar Dream (Album Deluxe)",
    artist: "Jeriq",
    year: "2022",
  },
  {
    image: NINE,
    alt: "Music Cover for Save My Life by Party Animal",
    description: "Save My Life",
    artist: "Party Animals",
    year: "2022",
  },
  {
    image: TEN,
    alt: "Music Cover for Imagine by Insane Chips and Tekno",
    description: "Imagine",
    artist: "Insane chips and Tekno",
    year: "2022",
  },
  {
    image: ELEVEN,
    alt: "Music Cover for Veronica by Alpha P and AV",
    description: "Veronica",
    artist: "Alpha P and AV",
    year: "2022",
  },
  {
    image: TWELVE,
    alt: "Music Cover for Billion Dollar Dream (Album) by Jeriq",
    description: "Billion Dollar Dream (Album)",
    artist: "Jeriq",
    year: "2022",
  },
  {
    image: THIRTEEN,
    alt: "Music Cover for Joanna by Governor Of Africa, Spy Shitta and Lil Kesh",
    description: "Joanna",
    artist: "Governor Of Africa, Spy Shitta and Lil Kesh",
    year: "2022",
  },
];

const Freelance = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h3>Welcome to my</h3>
        <h1>
          <Typewriter
            options={{
              cursor: " ",
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(250).typeString("Freelance Page").start();
            }}
          />
        </h1>
      </header>
      <ul className={classes.body}>
        {artDetails.map((art, index) => {
          const evenChecker = index % 2;
          return (
            <FreelanceArt
              image={art.image}
              alt={art.alt}
              description={art.description}
              artist={art.artist}
              year={art.year}
              even={evenChecker}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Freelance;
