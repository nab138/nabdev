import projects from "../utils/projects";
import "./Home.css";
import Slideshow from "../components/Slideshow";
import Typewriter from "../components/Typewriter";
import languages from "../utils/languages";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-slide-container">
        <Slideshow
          slides={projects.map((p) => {
            return {
              name: p.name,
              desc: p.short,
              image: p.image,
              link: "/projects/" + p.id,
            };
          })}
          isBackground
          autoSwitchTime={8000}
        />
      </div>
      <span className="home-content-container">
        <h1 className="logo">nabdev</h1>
        <Typewriter options={languages} />
        <div className="home-button-container">
          <Link to="/about" className="link-btn">
            About
          </Link>
          <Link to="/about" className="link-btn">
            My Projects
          </Link>
          <Link to="/about" className="link-btn">
            Contact
          </Link>
          <Link
            to="https://github.com/nab138"
            target="_blank"
            className="link-btn"
          >
            Github
          </Link>
        </div>
      </span>
    </div>
  );
}
