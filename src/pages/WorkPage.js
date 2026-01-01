import { useState, useEffect } from "react";
import WorkContent from "../components/WorkContent";
import Up from "../components/Up";

const colors = [
  "#C62828", "#EF6C00", "#F9A825", "#2E7D32", "#00838F",
  "#1565C0", "#6A1B9A", "#AD1457", "#E64A19", "#009688",
  "#283593", "#880E4F", "#689F38", "#D84315", "#00796B"
];

const WorkPage = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [linkColors, setLinkColors] = useState({});

  // Load colors from localStorage on mount
  useEffect(() => {
    const savedColors = localStorage.getItem("workLinkColors");
    if (savedColors) {
      setLinkColors(JSON.parse(savedColors));
    }
  }, []);

  // Save colors to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("workLinkColors", JSON.stringify(linkColors));
  }, [linkColors]);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [activeProject]);

  const projects = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `${String(i + 1).padStart(2, "0")}. Lorem`
  }));

  const handleClick = (project) => {
    setLinkColors(prev => ({
      ...prev,
      [project.id]: prev[project.id] || colors[Math.floor(Math.random() * colors.length)]
    }));

    setActiveProject(project);
  };

  return (
    <div className="flex flex-col md:p-10 w-full items-center text-lg relative text-gray">
      {projects.map((project) => (
        <div key={project.id} className="w-auto mx-auto font-[monospace]">
          <button
            onClick={() => handleClick(project)}
            className="cursor-pointer w-fit mx-auto block text-left font-[monospace]"
          >
            <span className="text-[gray]">{project.title.split(" ")[0]} </span>
            <span
              className="underline decoration-dotted"
              style={{ color: linkColors[project.id] || "#0F0E0E" }}
            >
              {project.title.split(" ").slice(1).join(" ")}
            </span>
          </button>
        </div>
      ))}

      {activeProject && (
        <WorkContent
          title={activeProject.title.replace(/^\d+\.\s*/, "")}
          onClose={() => setActiveProject(null)}
          className=" max-h-[80vh] overflow-y-auto"
        />
      )}

      <button className="flex w-full justify-center mt-2 md:mt-10 text-3xl md:text-5xl items-center scroll-smooth">
        <Up />
      </button>
    </div>
  );
};

export default WorkPage;
