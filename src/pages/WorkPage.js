import { useState, useEffect } from "react";
import NoteContent from "../components/WorkContent";
import { FaCaretUp } from "react-icons/fa6";

const WorkPage = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Lock background scroll when popup is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [activeProject]);

  const projects = [
    { id: 1, title: "01. Lorem" },
    { id: 2, title: "02. Lorem" },
    { id: 3, title: "03. Lorem" },
    { id: 4, title: "04. Lorem" },
    { id: 5, title: "05. Lorem" },
    { id: 6, title: "06. Lorem" },
    { id: 7, title: "07. Lorem" },
    { id: 8, title: "08. Lorem" },
    { id: 9, title: "09. Lorem" },
    { id: 10, title: "10. Lorem" },
    { id: 11, title: "11. Lorem" },
    { id: 12, title: "12. Lorem" },
    { id: 13, title: "13. Lorem" },
    { id: 14, title: "14. Lorem" },
    { id: 15, title: "15. Lorem" },
    { id: 16, title: "16. Lorem" },
  ];

  const handleClick = (project) => setActiveProject(project);

  return (
    <div className="flex flex-col md:p-10 w-full items-center text-lg relative">
      {projects.map((project) => (
        <div key={project.id} className="w-auto mx-auto font-[monospace]">
          <button
            onClick={() => handleClick(project)}
            className="cursor-pointer w-fit mx-auto block text-left"
            style={{ color: "black" }}
          >
            <span>{project.title.split(" ")[0]} </span>
            <span className="underline decoration-dotted">
              {project.title.split(" ").slice(1).join(" ")}
            </span>
          </button>
        </div>
      ))}

      {activeProject && (
        <NoteContent
          title={activeProject.title.replace(/^\d+\.\s*/, "")}
          titleColor="black"
          onClose={() => setActiveProject(null)}
          className="font-[times-new-roman] max-h-[80vh] overflow-y-auto"
        />
      )}

      <a
        href="/"
        className="flex w-full justify-center mt-2 md:mt-10 text-3xl md:text-5xl items-center scroll-smooth "
      >
        <FaCaretUp />
      </a>
    </div>
  );
};

export default WorkPage;
