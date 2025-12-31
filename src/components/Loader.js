import { useEffect, useState } from "react";

const Loader = ({ mainId = "main" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const main = document.getElementById(mainId);

    const handleLoad = () => {
      setVisible(false);
      setTimeout(() => {
        if (main) main.hidden = false;
      }, 400); // fade-out duration
    };

    // If the page is already loaded (fast navigation or cached), hide loader immediately
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Clean up listener on unmount
    return () => window.removeEventListener("load", handleLoad);
  }, [mainId]);

  if (!visible) return null;

  const loaderStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "#F7F7F2",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    fontFamily: "monospace",
    transition: "opacity 0.4s ease",
  };

  const spinnerStyle = {
    width: "32px",
    height: "32px",
    border: "2px solid #ccc",
    borderTop: "2px solid #FF6235",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "1rem",
  };

  const loadingTextStyle = {
    fontSize: "0.8rem",
    color: "gray",
    letterSpacing: "0.05em",
  };

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
      <div style={loadingTextStyle}>finding the stuck pixels…</div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;