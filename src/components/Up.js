import { useState } from "react";
import { FaCaretUp } from "react-icons/fa6";

// Color pool for random hover
const colors = [
  "#C62828", "#EF6C00", "#F9A825", "#2E7D32", "#00838F",
  "#1565C0", "#6A1B9A", "#AD1457", "#E64A19", "#009688",
  "#283593", "#880E4F", "#689F38", "#D84315", "#00796B"
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Close = ({ className }) => {
  const [hover, setHover] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`text-5xl font-bold cursor-pointer ${className || ""}`}
      style={{ color: hover ? getRandomColor() : "#000" }}
      aria-label="Scroll to Top"
    >
      <FaCaretUp />
    </div>
  );
};

export default Close;