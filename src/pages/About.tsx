import { useEffect } from "react";
import TechIcon from "../components/TechIcon";
import { useTransitionNav } from "../utils/NavigationProvider";
import "./About.css";

let technologies = [
  "React",
  "JavaScript",
  "TypeScript",
  "Rust",
  "Tauri",
  "HTML5",
  "CSS3",
  "Python",
  "Kotlin",
  "Java",
  "Swift",
  "PostgreSQL",
  "Git",
  "GitHub Actions",
  "Next.js",
];

export default function About() {
  const { finishTransition } = useTransitionNav();

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
        <ul>
          <li>I work on projects to support my FRC robotics team, 3044</li>
          <li>
            I build mobile apps, websites, and other tools both for fun and
            function
          </li>
        </ul>
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
