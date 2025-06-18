import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./Project.css";
import { mainProjects, miniProjects } from "../utils/projects";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import TechIcon from "../components/TechIcon";

export default function Project() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const isMini = location.pathname.includes("mini-projects");
  const project = (isMini ? miniProjects : mainProjects).find(
    (p) => p.id === params.projectId
  );

  useEffect(() => {
    if (!project) {
      navigate("/projects/");
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="project-container">
      <div className="project-header">
        <h1>{project?.name}</h1>
        <Link to={isMini ? "/mini-projects" : "/projects"}>
          <h3>{isMini ? "Mini" : "All"} Projects</h3>
        </Link>
      </div>
      <div className="project-content">
        <div className="project-slides">
          <Slideshow
            slides={project.images.map((i) => {
              return {
                name: "",
                desc: "",
                image: "/" + i,
                link: "",
              };
            })}
            isBackground={false}
            autoSwitchTime={8000}
            contain
          />
        </div>
        <div className="project-details">
          <h2>Description</h2>
          <p>{project.long ? project.long : project.short}</p>
        </div>
        {project.points && (
          <div className="project-points">
            <h2>{project.pointsTitle ?? "Points"}</h2>
            <ul className="project-points-list">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        {project.links && (
          <div className="project-links">
            <h2>Links</h2>
            <div className="project-links-list">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
        {project.techStack && (
          <div className="project-tech-stack">
            <h2>Tech Stack</h2>
            <div className="project-tech-list">
              {project.techStack.map((tech) => (
                <div key={tech}>
                  <TechIcon tech={tech} />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
