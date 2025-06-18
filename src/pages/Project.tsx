import { useLocation, useParams } from "react-router-dom";
import "./Project.css";
import { mainProjects, miniProjects } from "../utils/projects";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import TechIcon from "../components/TechIcon";
import { useTransitionNav } from "../utils/NavigationProvider";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Project() {
  const location = useLocation();
  const params = useParams();
  const { navigate, finishTransition } = useTransitionNav();
  const isMini = location.pathname.includes("mini-projects");
  const project = (isMini ? miniProjects : mainProjects).find(
    (p) => p.id === params.projectId
  );

  useEffect(() => {
    if (!project) {
      navigate("/projects/");
    }
  }, [project, navigate]);

  useEffect(() => {
    finishTransition();
  }, [finishTransition]);

  if (!project) {
    return null;
  }

  return (
    <div className="project-container">
      <Helmet>
        <title>{project.name} - nabdev</title>
        <meta
          name="description"
          content={`Info about ${project.name}: ${project.short}`}
        />
        <meta
          property="og:url"
          content={`https://nabdev.me/${isMini ? "mini-" : ""}projects/${
            project.id
          }`}
        />
        <meta property="og:title" content={`${project.name} - nabdev`} />
        <meta
          property="og:description"
          content={`Info about ${project.name}: ${project.short}`}
        />
      </Helmet>
      <div className="project-header">
        <h1>{project?.name}</h1>
        <button
          className="link"
          onClick={() => navigate(isMini ? "/mini-projects" : "/projects")}
        >
          <h2>{isMini ? "Mini" : "All"} Projects</h2>
        </button>
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
