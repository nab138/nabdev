import projects from "../utils/projects";
import "./Projects.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const location = useLocation();
  const [animating, setAnimating] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [fsStyle, setFsStyle] = useState<any>({});
  const transitionProjectIdx = location.state?.transitionProject;
  const transitionProject =
    typeof transitionProjectIdx === "string"
      ? projects[parseInt(transitionProjectIdx)]
      : undefined;
  const fsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (transitionProject) {
      setAnimating(true);
      setHideOverlay(false);
      setFsStyle({});
      setTimeout(() => {
        const idx = parseInt(transitionProjectIdx);
        const card = cardRefs.current[idx];
        if (card && fsRef.current) {
          const cardRect = card.getBoundingClientRect();
          const scrollY = window.scrollY || window.pageYOffset;
          const scrollX = window.scrollX || window.pageXOffset;
          setFsStyle({
            position: "absolute",
            top: cardRect.top + scrollY + "px",
            left: cardRect.left + scrollX + "px",
            width: cardRect.width + "px",
            height: cardRect.height + "px",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
            zIndex: 10,
            backgroundColor: "#201c1c",
          });
          setTimeout(() => {
            setHideOverlay(true);
            setAnimating(false);
          }, 600);
        }
      }, 50);
    }
  }, [transitionProject]);

  return (
    <div className="projects-container" style={{ position: "relative" }}>
      {transitionProject && !hideOverlay && (
        <div className="project-fs" ref={fsRef} style={fsStyle}>
          <img
            src={"/" + transitionProject.images[0]}
            alt={transitionProject.name}
            className="project-fs-img"
          />
          <div className="project-info">
            <h2>{transitionProject.name}</h2>
            <p>{transitionProject.short}</p>
          </div>
        </div>
      )}
      <h1>My Projects</h1>
      <div className="projects-content">
        {projects.map((project, idx) => (
          <div
            className={`project-card`}
            key={project.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            style={
              transitionProject &&
              animating &&
              !hideOverlay &&
              idx === parseInt(transitionProjectIdx)
                ? { visibility: "hidden" }
                : undefined
            }
            onClick={() => {
              navigate("/projects/" + project.id);
            }}
          >
            <img
              src={"/" + project.images[0]}
              alt={project.name}
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.short}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
