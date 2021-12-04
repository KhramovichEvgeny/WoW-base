import React from "react";

const TextButton = ({ color, setColor }) => {
  return (
    <div>
      <button
        onClick={() => {
          const newColor = color === "red" ? "green" : "red";
          setColor(newColor);
        }}
        type="button"
      >
        Change color
      </button>
    </div>
  );
};

export default TextButton;
