import React, { useState } from "react";

const LikeButton= () => {
  const [likes, setLikes] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[backgroundColorIndex],
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleLikeClick}>
        {likes} Like{likes !== 1 ? "s" : ""}
      </button>
    </div>
  );
};

export default LikeButton;