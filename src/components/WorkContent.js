import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import aptMD from "../assets/md/apt.md"; // your markdown file

const WorkContent = ({ title, onClose, titleColor }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(aptMD)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-[90vw] max-w-6xl h-[85vh] bg-white rounded-lg flex flex-col overflow-auto">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-xl font-bold hover:opacity-60"
          aria-label="Close"
        >
          ×
        </button>

        {/* Markdown Content with colored title */}
        <div className="p-6 flex-1 overflow-auto font-[georgia] text-xl md:text-5xl">
          {/* <span style={{ color: titleColor }} className="text-lg">{title}</span>
          <br /> */}
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
