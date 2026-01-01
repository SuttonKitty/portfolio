import { useState } from "react";
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
import deer from "../assets/video/deer.mov";
import catfittii from "../assets/img/catfittii.jpeg";
import shoes from "../assets/img/shoes.jpeg";
import dive from "../assets/img/dive.JPG";

import NoteCard from "../components/NoteCard";
import Up from "../components/Up";

const colors = [
  "#C62828", "#EF6C00", "#F9A825", "#2E7D32", "#00838F",
  "#1565C0", "#6A1B9A", "#AD1457", "#E64A19", "#009688",
  "#283593", "#880E4F", "#689F38", "#D84315", "#00796B"
];

const images = [
  { src: tug, description: "High contrast, dramatic lighting.", date: "2023" },
  { src: me, description: "35mm portrait, natural light.", date: "2022" },
  { src: eye, description: "Close study of perception and focus.", date: "2023" },
  { src: bela, description: "Soft contrast, ambient light.", date: "2024" },
  { src: fish, description: "Texture study, archival color.", date: "2021" },
  { src: catfittii, description: "Playful composition, vibrant colors.", date: "2022" },
  { src: shoes, description: "Street photography, candid moment.", date: "2023" },
  { src: dive, description: "Action shot, dynamic movement.", date: "2024" },
  { src: windowImg, description: "Distance, framing, stillness.", date: "2022" },
  { src: fortGreeene, description: "Urban landscape, high contrast.", date: "2023" },
  { src: moss, description: "Nature close-up, vibrant color.", date: "2024" },
  { src: rocks, description: "Monochrome texture study.", date: "2021" },
  { src: belabw, description: "Black and white portrait, high contrast.", date: "2024" },
  { src: belaLooks, description: "Candid moment, natural expression.", date: "2024" },
  { videoSrc: deer, description: "Experimental video loop.", date: "2025" },
];

const NotesPage = () => {
  // Pick a random color once and persist it
  const [noteColor] = useState(() => {
    return colors[Math.floor(Math.random() * colors.length)];
  });

  return (
    <div className="flex flex-col md:p-10 w-full items-start text-base md:text-5xl gap-[1.25rem] md:gap-10">
      <div className="text-sm font-[monospace] md:font-[Inter] text-justify md:text-6xl">
        <span style={{ color: noteColor, fontWeight: "bold" }}>Notes </span>
        is my adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      <NoteCard
        images={images}
        loading="lazy"
        decoding="async"
        renderText={(img) => (
          <>
            <p className="text-sm md:text-base">{img.description}</p>
            <p className="text-[gray]">{img.date}</p>
          </>
        )}
      />

      <button className="flex w-full justify-center mt-2 md:mt-10 text-3xl md:text-5xl items-center scroll-smooth">
        <Up />
      </button>
    </div>
  );
};

export default NotesPage;
