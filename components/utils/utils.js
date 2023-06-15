import NONSO from "../../images/personalWork/NINE.jpg";
import ONE from "../../images/personalWork/ONE.jpg";
import TWO from "../../images/personalWork/TWO.jpg";
import THREE from "../../images/personalWork/THREE.jpg";
import FOUR from "../../images/personalWork/FOUR.jpg";
import FIVE from "../../images/personalWork/FIVE.jpg";
import SIX from "../../images/personalWork/SIX.jpg";
import SEVEN from "../../images/personalWork/SEVEN.jpg";
import EIGHT from "../../images/personalWork/EIGHT.jpg";
import NINE from "../../images/personalWork/NINE.jpg";
import TEN from "../../images/personalWork/TEN.jpg";
import ELEVEN from "../../images/personalWork/ELEVEN.jpg";
import TWELVE from "../../images/personalWork/TWELVE.jpg";
import THIRTEEN from "../../images/personalWork/THIRTEEN.jpg";
import FOURTEEN from "../../images/personalWork/FOURTEEN.jpg";
import FIFTEEN from "../../images/personalWork/FIFTEEN.jpg";
import SIXTEEN from "../../images/personalWork/SIXTEEN.jpg";
import SEVENTEEN from "../../images/personalWork/SEVENTEEN.jpg";
import EIGHTEEN from "../../images/personalWork/EIGHTEEN.jpg";
import NINETEEN from "../../images/personalWork/NINETEEN.jpg";

//WELCOME IMAGES
import WELCOME__ONE from "../../images/welcome/one.jpg";
import WELCOME__TWO from "../../images/welcome/two.jpg";
import WELCOME__THREE from "../../images/welcome/three.jpg";
import WELCOME__FOUR from "../../images/welcome/four.jpg";
import WELCOME__FIVE from "../../images/welcome/five.jpg";
import WELCOME__SIX from "../../images/welcome/six.jpg";

export const welcomeImages = [
  WELCOME__ONE,
  WELCOME__TWO,
  WELCOME__THREE,
  WELCOME__FOUR,
  WELCOME__FIVE,
  WELCOME__SIX,
];

export const frameSizingAndPrice = [
  { size: "12×15″", amount: 10000 },
  { size: "16×16″", amount: 12000 },
  { size: "16×20″", amount: 12000 },
  { size: "18×20″", amount: 14000 },
  { size: "18×24″", amount: 15000 },
  { size: "24×24″", amount: 17000 },
  { size: "20×30″", amount: 18000 },
  { size: "30×30″", amount: 20000 },
  { size: "24×36″", amount: 20000 },
  { size: "24×45″", amount: 22000 },
  { size: "30×45″", amount: 24000 },
  { size: "36×36″", amount: 24000 },
  { size: "36×45″", amount: 26000 },
  { size: "40×40″", amount: 28000 },
  { size: "40×45″", amount: 28000 },
  { size: "32×52″", amount: 35000 },
  { size: "40×50″", amount: 35000 },
  { size: "45×45″", amount: 35000 },
  { size: "36×60″", amount: 40000 },
  { size: "45×60″", amount: 45000 },
];

export function formatNumberWithCommas(number) {
  // Convert the number to a string
  const numberString = number.toString();

  // Split the string into an array of characters
  const numberArray = numberString.split("");

  // Start adding commas from the right every 3 digits
  let commaCount = 0;
  for (let i = numberArray.length - 1; i >= 0; i--) {
    commaCount++;
    if (commaCount % 3 === 0 && i !== 0) {
      numberArray.splice(i, 0, ",");
    }
  }

  // Join the array back into a string
  const formattedNumber = numberArray.join("");

  return formattedNumber;
}

export const shopTestItems = [
  {
    image: ONE,
    name: "Print #001",
    amount: 40000,
  },
  {
    image: TWO,
    name: "Print #002",
    amount: 40000,
  },
  {
    image: THREE,
    name: "Print #003",
    amount: 40000,
  },
  {
    image: FOUR,
    name: "Print #004",
    amount: 40000,
  },
  {
    image: FIVE,
    name: "Print #005",
    amount: 40000,
  },
  {
    image: SIX,
    name: "Print #006",
    amount: 40000,
  },
];

export const allArt = [
  { image: ONE, category: "personal" },
  { image: TWO, category: "personal" },
  { image: THREE, category: "personal" },
  { image: FOUR, category: "personal" },
  { image: FIVE, category: "personal" },
  { image: SIX, category: "personal" },
  { image: SEVEN, category: "client" },
  { image: EIGHT, category: "client" },
  { image: NINE, category: "client" },
  { image: TEN, category: "client" },
  { image: ELEVEN, category: "client" },
  { image: TWELVE, category: "client" },
  { image: THIRTEEN, category: "client" },
  { image: FOURTEEN, category: "client" },
  { image: FIFTEEN, category: "client" },
  { image: SIXTEEN, category: "client" },
  { image: SEVENTEEN, category: "client" },
  { image: EIGHTEEN, category: "client" },
  { image: NINETEEN, category: "client" },
];

export const totalAmountHandler = (array) => {
  // Total sum of amounts
  let sum = 0;

  //Loop through the cart items
  array.map((item) => {
    //Add each item's amount to the total sum
    sum += item.amount;
  });

  return sum;
};
