import { useState, useEffect } from "react";

const PrjCard = ({ images, columns = 4, gap = "1.25rem", renderText }) => {
  const [activeImage, setActiveImage] = useState(null);
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

  const imageStyle = (index) => ({
    width: "100%",
    height: "auto",
    display: "block",
    cursor: "pointer",
    marginBottom: gap,
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
    overflow: "hidden",
  };

  const popupImageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  const bottomSectionStyle = {
    padding: "1.25rem",
    fontSize: "0.85rem",
    lineHeight: 1.6,
    color: "#444",
    textAlign: "left",
  };

  const closeStyle = {
    position: "absolute",
    top: "0.75rem",
    left: "0.75rem",
    fontSize: "1.25rem",
    cursor: "pointer",
    background: "transparent",
    border: "none",
    padding: 0,
    lineHeight: 1,
    color: "white",
    mixBlendMode: "difference",
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={gridStyle}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt || ""}
            style={imageStyle(index)}
            onClick={() => setActiveImage(img)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {activeImage && (
        <div style={overlayStyle} onClick={() => setActiveImage(null)}>
          <div style={popupStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeStyle} onClick={() => setActiveImage(null)}>
              ×
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt || ""}
              style={popupImageStyle}
            />

            <div style={bottomSectionStyle}>
              {renderText ? renderText(activeImage) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrjCard;
