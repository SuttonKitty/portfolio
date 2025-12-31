import dala from "../assets/img/dala.png";
import tug from "../assets/img/tug.jpeg";
import me from "../assets/img/me.jpeg";
import eye from "../assets/img/eye.jpeg";
import bela from "../assets/img/bela.jpeg";
import fish from "../assets/img/fish.JPG";
import window from "../assets/img/window.JPG";

// import Project from "../components/Project";
import PrjCard from "../components/PrjCard";

import { FaCaretUp } from "react-icons/fa6";



const images = [
  {
    src: dala,
    title: "Dala Horse",
    description: "Study in form and cultural repetition.",
  },
  {
    src: tug,
    title: "Tug",
    description: "Gesture and tension in motion.",
  },
  {
    src: me,
    title: "Self",
    description: "35mm portrait, natural light.",
  },
  {
    src: eye,
    title: "Eye",
    description: "Close study of perception and focus.",
  },
  {
    src: bela,
    title: "Bela",
    description: "Soft contrast, ambient light.",
  },
  {
    src: fish,
    title: "Fish",
    description: "Texture study, archival color.",
  },
  {
    src: window,
    title: "Window",
    description: "Distance, framing, stillness.",
  },
];

const NotesPage = () => {
  return (
    <div className="flex flex-col md:p-10 w-full items-start text-base md:text-5xl gap-2 md:gap-10 font-[monospace] md:font-[helvetica]">
      <div className="text-sm md:text-6xl text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <PrjCard
        images={images}
        renderText={(img) => (
          <>
            <p className="font-medium">{img.title}</p>
            <p className="opacity-70 text-sm">{img.description}</p>
          </>
        )}
      />

      <a
        href="#top"
        className="flex w-full justify-center text-3xl md:text-5xl items-center scroll-smooth"
      >
        <FaCaretUp />
      </a>

    </div>
  );
};

export default NotesPage;