// NoteCard.js
import { useState, useEffect } from "react";

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

  const itemStyle = (index) => ({
    width: "100%",
    display: "block",
    cursor: "pointer",
    marginBottom: gap,
    borderRadius: "0.25rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    filter: hoveredIndex === index ? "grayscale(0%)" : "grayscale(100%)",
    transition: "filter 0.1s ease",
  });

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
    // mixBlendMode: "difference",
  };

  return (
    <div style={{ width: "100%" }} className="font-[monospace]">
      <div style={gridStyle}>
        {images.map((item, index) =>
          item.videoSrc ? (
            <video
              key={index}
              src={item.videoSrc}
              style={itemStyle(index)}
              onClick={() => setActiveItem(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              muted
              loop
              playsInline
            />
          ) : (
            <img
              key={index}
              src={item.src}
              alt={item.alt || ""}
              style={itemStyle(index)}
              onClick={() => setActiveItem(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          )
        )}
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
