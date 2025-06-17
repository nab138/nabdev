import { useEffect } from "react";
import TechIcon from "../components/TechIcon";
import { useTransitionNav } from "../utils/NavigationProvider";
import "./About.css";

let technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Rust",
  "Tauri",
  "Python",
  "Kotlin",
  "Java",
  "Gradle",
  "WPILib",
  "Swift",
  "Git",
  "GitHub Actions",
  "C#",
];

export default function About() {
  const { navigate, finishTransition } = useTransitionNav();

  useEffect(() => {
    finishTransition();
  }, [finishTransition]);

  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <h1>Hi, I'm Nick.</h1>
        <p>
          I'm a high school student who loves working on various software
          development projects.
        </p>
        <ul className="about-list">
          <li>
            I work on projects, tools, and educational resources to support my
            FRC robotics team, 3044
          </li>
          <li>
            I build mobile apps, websites, and other utilities to serve a
            purpose for myself and others
          </li>
          <li>I make silly things for fun ;)</li>
        </ul>
        <div className="about-buttons">
          <button onClick={() => navigate("/")} className="link-btn">
            Home
          </button>
          <button
            onClick={() => navigate("/projects", true)}
            className="link-btn"
          >
            Projects
          </button>
        </div>
      </div>
      <div className="technologies">
        {technologies.map((tech) => (
          <div key={tech} className="tech-item">
            <p>{tech}</p>
            <TechIcon tech={tech} size={36} />
          </div>
        ))}
      </div>
    </div>
  );
}
