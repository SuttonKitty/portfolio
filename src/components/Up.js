// RandomCloseButton.jsx
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

// Color pool for random hover
const colors = [
  "#C62828", "#EF6C00", "#F9A825", "#2E7D32", "#00838F",
  "#1565C0", "#6A1B9A", "#AD1457", "#E64A19", "#009688",
  "#283593", "#880E4F", "#689F38", "#D84315", "#00796B"
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Close = ({ onClick, className, size = "3xl", position = "absolute top-2 left-2" }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${position} text-${size} font-bold ${className || ""}`}
      style={{ color: hover ? getRandomColor() : "#fff" }}
      aria-label="Close"
    >
      <FaCaretDown />
    </div>
  );
};

export default Close;
