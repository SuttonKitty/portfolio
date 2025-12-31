import { useState, useEffect } from "react";

import { FaPlay } from "react-icons/fa";

import Close from "./Close";

const NoteCard = ({ images, columns = 4, gap = "1.25rem", renderText }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle responsive column count
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColumnCount = () => {
    if (windowWidth <= 768) return 2;
    return columns;
  };

  const gridStyle = {
    columnCount: getColumnCount(),
    columnGap: gap,
    width: "100%",
    margin: "0 auto",
    padding: 0,
  };

  const itemContainerStyle = {
    position: "relative",
    marginBottom: gap,
    borderRadius: "0.25rem",
    overflow: "hidden",
    display: "block",
  };

  const mediaStyle = (index) => ({
    width: "100%",
    display: "block",
    cursor: "pointer",
    filter: hoveredIndex === index ? "grayscale(0%)" : "grayscale(100%)",
    transition: "filter 0.1s ease",
  });

  const playIconStyle = {
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    color: "white",
    fontSize: "1rem",
    pointerEvents: "none", // lets click pass through to video
    textShadow: "0 0 5px rgba(0,0,0,0.7)",
  };

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "2rem",
  };

  const popupStyle = {
    position: "relative",
    maxWidth: "520px",
    width: "100%",
    background: "#fff",
    overflow: "auto",
    borderRadius: "0.25rem",
  };

  const popupMediaStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  const bottomSectionStyle = {
    padding: "0.5rem",
    fontSize: "0.85rem",
    lineHeight: 1.6,
    color: "#444",
    textAlign: "left",
  };

  const closeStyle = {
    position: "absolute",
    top: "0.25rem",
    left: "0.25rem",
    cursor: "pointer",
    background: "transparent",
    padding: 0,
    lineHeight: 1,
  };

  return (
    <div style={{ width: "100%" }} className="font-[monospace]">
      <div style={gridStyle}>
        {images.map((item, index) => (
          <div
            key={index}
            style={itemContainerStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.videoSrc ? (
              <>
                <video
                  src={item.videoSrc}
                  style={mediaStyle(index)}
                  onClick={() => setActiveItem(item)}
                  muted
                  loop
                  playsInline
                />
                <FaPlay style={playIconStyle} />
              </>
            ) : (
              <img
                src={item.src}
                alt={item.alt || ""}
                style={mediaStyle(index)}
                onClick={() => setActiveItem(item)}
              />
            )}
          </div>
        ))}
      </div>

      {activeItem && (
        <div style={overlayStyle} onClick={() => setActiveItem(null)}>
          <div style={popupStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeStyle} onClick={() => setActiveItem(null)}>
              <Close />
            </button>

            {activeItem.videoSrc ? (
              <video
                src={activeItem.videoSrc}
                style={popupMediaStyle}
                controls
                autoPlay
              />
            ) : (
              <img
                src={activeItem.src}
                alt={activeItem.alt || ""}
                style={popupMediaStyle}
              />
            )}

            <div style={bottomSectionStyle}>
              {renderText ? renderText(activeItem) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteCard;