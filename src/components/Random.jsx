import React, { useState } from "react";

function Random({ min, max }) {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <div>
      <h2>number is: {num}</h2>
      <button onClick={handleClick}>number</button>
    </div>
  );
}

export default Random;