// RandomCloseButton.jsx
import { useState, useEffect, useRef } from "react";
import { IoIosClose } from "react-icons/io";

// Color pool for random hover
const colors = [
  "#C62828", "#EF6C00", "#F9A825", "#2E7D32", "#00838F",
  "#1565C0", "#6A1B9A", "#AD1457", "#E64A19", "#009688",
  "#283593", "#880E4F", "#689F38", "#D84315", "#00796B"
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Utility to calculate brightness
const getContrastColor = (bgColor) => {
  if (!bgColor) return "#000";
  let r, g, b;

  // Handle rgb(a) and hex formats
  if (bgColor.startsWith("rgb")) {
    const values = bgColor.match(/\d+/g);
    [r, g, b] = values.map(Number);
  } else {
    const hex = bgColor.replace("#", "");
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000" : "#F7F7F2";
};

const Close = ({ onClick, className, size = "3xl", position = "absolute top-2 left-0.5" }) => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState("#000");
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const parent = buttonRef.current.parentElement;
      if (parent) {
        const bgColor = getComputedStyle(parent).backgroundColor;
        setColor(getContrastColor(bgColor));
      }
    }
  }, []);

  return (
    <div
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${position} text-${size} cursor-pointer ${className || ""}`}
      style={{ color: hover ? getRandomColor() : color }}
      aria-label="Close"
    >
      <b><IoIosClose /></b>
    </div>
  );
};

export default Close;
