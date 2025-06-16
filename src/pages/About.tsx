import TechIcon from "../components/TechIcon";
import "./About.css";

let technologies = [
  "react",
  "javascript",
  "typescript",
  "rust",
  "tauri",
  "html5",
  "css3",
  "python",
  "kotlin",
  "java",
  "swift",
  "postgresql",
  "git",
  "githubactions",
  "next.js",
];

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <h1>Hi, I'm Nick.</h1>
        <p>
          I'm a high school student who loves working on various software
          development projects.
        </p>
      </div>
      <div className="technologies">
        {technologies.map((tech) => (
          <TechIcon tech={tech} key={tech} size={48} />
        ))}
      </div>
    </div>
  );
}
