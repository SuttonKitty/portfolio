import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // optional for code highlighting

import aptMD from "../assets/md/apt.md"; // your markdown file

import Close from "./Close"; // <-- import the reusable component

// Import all images you want to use in Markdown
import bela from "../assets/img/bela.jpeg";
import belabw from "../assets/img/belabw.jpeg";
import belaLooks from "../assets/img/belaLooks.JPG";
import tug from "../assets/img/tug.jpeg";
import me from "../assets/img/self.jpeg";
import eye from "../assets/img/eye.jpeg";
import fish from "../assets/img/fish.JPG";
import fortGreeene from "../assets/img/fortGreene.jpeg";
import moss from "../assets/img/moss.png";
import rocks from "../assets/img/rocks.JPG";
import windowImg from "../assets/img/windowImg.JPG";

const imagesMap = {
  "bela.jpeg": bela,
  "belaBW.jpeg": belabw,
  "belaLooks.jpeg": belaLooks,
  "tug.jpeg": tug,
  "me.jpeg": me,
  "eye.jpeg": eye,
  "fish.JPG": fish,
  "fortGreene.jpeg": fortGreeene,
  "moss.jpeg": moss,
  "rocks.jpeg": rocks,
  "windowImg.JPG": windowImg,
};

const WorkContent = ({ title, onClose }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(aptMD)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error(err));
  }, []);

  // Inline Markdown styles
  const markdownStyles = {
    h1: { fontSize: "2em", fontWeight: "bold", marginTop: "1em" },
    h2: { fontSize: "1.5em", fontWeight: "bold", marginTop: "0.75em" },
    p: { margin: "0.5em 0" },
    img: {
      maxWidth: "60%",
      display: "block",
      margin: "1em auto",
      borderRadius: "0.25rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    },
    inlineCode: {
      backgroundColor: "#f6f8fa",
      padding: "0.2em 0.4em",
      borderRadius: "4px",
      fontFamily: "monospace",
    },
    codeBlock: {
      backgroundColor: "#f6f8fa",
      padding: "1em",
      borderRadius: "6px",
      overflowX: "auto",
      fontFamily: "monospace",
    },
    blockquote: {
      borderLeft: "4px solid #dfe2e5",
      paddingLeft: "1em",
      color: "#6a737d",
      margin: "0.5em 0",
    },
    ul: { paddingLeft: "1.5em", margin: "0.5em 0" },
    ol: { paddingLeft: "1.5em", margin: "0.5em 0" },
    a: { color: "#0366d6", textDecoration: "underline" },
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose} // click outside closes popup
    >
      <div
        className="relative w-[98%] md:w-[50%] h-[90%] bg-white rounded-md flex flex-col overflow-auto"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Use the reusable RandomCloseButton */}
        <Close onClick={onClose} />

        {/* Markdown Content */}
        <div className="flex-1 overflow-auto font-[georgia] text-sm p-2 pt-6 md:text-xl">
          <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              h1: ({ node, children, ...props }) => <h1 style={markdownStyles.h1} {...props}>{children}</h1>,
              h2: ({ node, children, ...props }) => <h2 style={markdownStyles.h2} {...props}>{children}</h2>,
              p: ({ node, children, ...props }) => <p style={markdownStyles.p} {...props}>{children}</p>,
              img: ({ node, alt, src, ...props }) => {
                const filename = src.split("/").pop();
                const resolvedSrc = imagesMap[filename] || src;
                return <img style={markdownStyles.img} alt={alt || ""} src={resolvedSrc} {...props} />;
              },
              code: ({ node, inline, className, children, ...props }) =>
                inline ? (
                  <code style={markdownStyles.inlineCode} {...props}>{children}</code>
                ) : (
                  <pre style={markdownStyles.codeBlock} {...props}><code>{children}</code></pre>
                ),
              blockquote: ({ node, children, ...props }) => <blockquote style={markdownStyles.blockquote} {...props}>{children}</blockquote>,
              ul: ({ node, children, ...props }) => <ul style={markdownStyles.ul} {...props}>{children}</ul>,
              ol: ({ node, children, ...props }) => <ol style={markdownStyles.ol} {...props}>{children}</ol>,
              a: ({ node, children, ...props }) => <a style={markdownStyles.a} {...props}>{children}</a>,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
