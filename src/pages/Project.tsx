import { useNavigate, useParams } from "react-router-dom";
import "./Project.css";
import projects from "../utils/projects";
import { useEffect } from "react";

export default function Project() {
  const params = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === params.projectId);

  useEffect(() => {
    if (!project) {
      navigate("/projects/");
    }
  }, [project, navigate]);

  return (
    <div className="project-container">
      <div className="project-header">
        <h1>{project?.name}</h1>
      </div>
    </div>
  );
}
