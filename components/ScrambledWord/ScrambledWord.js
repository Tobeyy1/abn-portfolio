import React, { useState, useEffect } from "react";

const ScrambledWord = ({ word }) => {
  const [scrambledWord, setScrambledWord] = useState("");
  const [revealedWord, setRevealedWord] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    setScrambledWord(scrambleWord(word));
  }, [word]);

  useEffect(() => {
    let scrambleTimer;
    let decryptTimer;

    if (!isDecrypting) {
      scrambleTimer = setInterval(() => {
        setScrambledWord(scrambleWord(scrambledWord));
      }, 2000);
    } else {
      let currentIndex = 0;
      decryptTimer = setInterval(() => {
        setRevealedWord((prev) => prev + scrambledWord[currentIndex]);
        currentIndex++;

        if (currentIndex === scrambledWord.length) {
          clearInterval(decryptTimer);
        }
      }, 1000);
    }

    return () => {
      clearInterval(scrambleTimer);
      clearInterval(decryptTimer);
    };
  }, [scrambledWord, isDecrypting]);

  useEffect(() => {
    const encryptionTimer = setTimeout(() => {
      setIsDecrypting(true);
    }, 5000);

    return () => {
      clearTimeout(encryptionTimer);
    };
  }, []);

  const scrambleWord = (word) => {
    const wordArr = word.split("");
    let currentIndex = wordArr.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [wordArr[currentIndex], wordArr[randomIndex]] = [
        wordArr[randomIndex],
        wordArr[currentIndex],
      ];
    }

    return wordArr.join("");
  };

  return (
    <div>
      <h1>{isDecrypting ? revealedWord : scrambledWord}</h1>
    </div>
  );
};

export default ScrambledWord;
