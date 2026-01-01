import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Close from "./Close";

const NoteCard = ({ images, columns = 4, gap = "1.25rem", renderText }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [clickedItems, setClickedItems] = useState(() => {
    // Load persisted clicked items from localStorage
    const stored = localStorage.getItem("clickedItems");
    return stored ? JSON.parse(stored) : [];
  });

  // Persist clickedItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("clickedItems", JSON.stringify(clickedItems));
  }, [clickedItems]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleItems([]);
    images.forEach((_, i) => {
      const delay = Math.random() * 400;
      setTimeout(() => {
        setVisibleItems((v) => [...v, i]);
      }, delay);
    });
  }, [images]);

  const getColumnCount = () => (windowWidth <= 768 ? 2 : columns);

  const gridStyle = {
    columnCount: getColumnCount(),
    columnGap: windowWidth <= 768 ? "0.5rem" : gap,
    width: "100%",
    margin: "0 auto",
    padding: 0,
  };

  const itemContainerStyle = {
    position: "relative",
    marginBottom: windowWidth <= 768 ? "0.5rem" : gap,
    borderRadius: "0.25rem",
    overflow: "hidden",
    display: "block",
  };

  const mediaStyle = (index) => {
    if (windowWidth <= 768) return { width: "100%", display: "block", cursor: "pointer" };

    const isClicked = clickedItems.includes(index);
    return {
      width: "100%",
      display: "block",
      cursor: "pointer",
      filter: isClicked
        ? "grayscale(0%) contrast(1) brightness(1)" // full color if clicked
        : hoveredIndex === index
        ? "grayscale(0%) contrast(1) brightness(1)" // hover effect
        : "grayscale(100%) contrast(1.05) brightness(0.98)", // default
      transition: "filter 0.3s ease",
    };
  };

  const playIconStyle = (index) => ({
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    color: "white",
    fontSize: "1rem",
    pointerEvents: "none",
    textShadow: "0 0 5px rgba(0,0,0,0.7)",
    opacity: hoveredIndex === index ? 0 : 1,
    transition: "opacity 0.3s ease",
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
    maxWidth: windowWidth <= 768 ? "90%" : "60%",
    width: "fit-content",
    background: "#F7F7F2",
    overflowY: "auto",
    overflowX: "hidden",
    borderRadius: "0.25rem",
  };

  const popupMediaStyle = {
    width: "100%",
    maxHeight: windowWidth <= 768 ? "80vh" : "70vh",
    objectFit: "contain",
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
    cursor: "pointer",
    background: "transparent",
    padding: 0,
    lineHeight: 1,
  };

  const handleClick = (item, index) => {
    setActiveItem(item);
    if (!clickedItems.includes(index)) setClickedItems([...clickedItems, index]);
  };

  return (
    <div style={{ width: "100%" }} className="font-[monospace]">
      <div style={gridStyle}>
        {images.map((item, index) => {
          const isVisible = visibleItems.includes(index);
          return (
            <div
              key={index}
              style={{
                ...itemContainerStyle,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : "translateY(6px)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.videoSrc ? (
                <>
                  <video
                    src={item.videoSrc}
                    style={mediaStyle(index)}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    onClick={() => handleClick(item, index)}
                  />
                  <FaPlay style={playIconStyle(index)} />
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  style={mediaStyle(index)}
                  loading="lazy"
                  decoding="async"
                  onClick={() => handleClick(item, index)}
                />
              )}
            </div>
          );
        })}
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
                preload="auto"
              />
            ) : (
              <img
                src={activeItem.src}
                alt={activeItem.alt || ""}
                style={popupMediaStyle}
                loading="eager"
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
