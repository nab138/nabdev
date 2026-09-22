import { useEffect } from "react";
import TechIcon from "../components/TechIcon";
import { useTransitionNav } from "../utils/NavigationProvider";
import "./About.css";
import { Helmet } from "@dr.pogodin/react-helmet";

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
      <Helmet>
        <title>About - nabdev</title>
        <meta
          name="description"
          content="Learn more about Nick, his background, and skills."
        />
        <meta property="og:url" content="https://nabdev.me/about" />
        <meta property="og:title" content="About - nabdev" />
        <meta
          property="og:description"
          content="Learn more about Nick, his background, and skills."
        />
      </Helmet>
      <div className="about-header">
        <h2>About Me</h2>
        <h1>Hi, I'm Nick.</h1>
        <p>
          I'm a student interested in software development, embedded systems,
          and computers in general.
        </p>
        <ul className="about-list">
          <li>RPI Class of 2030, Computer & Systems Engineering.</li>
          <li>
            I build apps, websites, and other utilities with an emphasis on
            accessibility and user-friendliness.
          </li>
          <li>Ex-FRC (Team 3044)</li>
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
