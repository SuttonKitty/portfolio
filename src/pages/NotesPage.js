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

import NoteCard from "../components/NoteCard";
import Up from "../components/Up";

const images = [
  {
    src: tug,
    description: "High contrast, dramatic lighting.",
    date: "2023",
  },
  {
    src: me,
    description: "35mm portrait, natural light.",
    date: "2022",
  },
  {
    src: eye,
    description: "Close study of perception and focus.",
    date: "2023",
  },
  {
    src: bela,
    description: "Soft contrast, ambient light.",
    date: "2024",
  },
  {
    src: fish,
    description: "Texture study, archival color.",
    date: "2021",
  },
  {
    src: windowImg,
    description: "Distance, framing, stillness.",
    date: "2022",
  },
  {
    src: fortGreeene,
    description: "Urban landscape, high contrast.",
    date: "2023",
  },
  {
    src: moss,
    description: "Nature close-up, vibrant color.",
    date: "2024",
  },
  {
    src: rocks,
    description: "Monochrome texture study.",
    date: "2021",
  },
  {
    src: belabw,
    description: "Black and white portrait, high contrast.",
    date: "2024",
  },
  {
    src: belaLooks,
    description: "Candid moment, natural expression.",
    date: "2024",
  },
  {
    videoSrc: deer,
    description: "Experimental video loop.",
    date: "2025",
  },
];


const NotesPage = () => {
  return (
    <div className="flex flex-col md:p-10 w-full items-start text-base md:text-5xl gap-[1.25rem] md:gap-10">
      <div className="text-sm font-[monospace] md:font-[Inter] text-justify md:text-6xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <NoteCard
        images={images}
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