import React from "react";

function BoxColor({ color, width, height }) {
  const boxStyle = {
    backgroundColor: color,
    width: width,
    height: height,
  };

  return (
    <div className="box" style={boxStyle}>
      <p>Color: {color}</p>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}

export default BoxColor;