import React, { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const Dice = () => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [currentImage, setCurrentImage] = useState(
    "../assets/images/dice-empty.png"
  );

  const rollDice = () => {
    setCurrentImage("../assets/images/dice-empty.png");

    // Delay for 1 second before changing the image
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentImage(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="Dice"
        onClick={rollDice}
        style={{ cursor: "pointer" }}
        width={100}
        height={100}
      />
    </div>
  );
};

export default Dice;