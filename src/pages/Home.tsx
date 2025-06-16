import "./Home.css";
import Typewriter from "../components/Typewriter";
import languages from "../utils/languages";
import { useTransitionNav } from "../utils/NavigationProvider";

export default function Home() {
  const { navigate } = useTransitionNav();

  return (
    <>
      <h1 className="logo">nabdev</h1>
      <Typewriter options={languages} />
      <div className="home-button-container">
        <button onClick={() => navigate("/about")} className="link-btn">
          About
        </button>
        <button
          onClick={() => navigate("/projects", true)}
          className="link-btn"
        >
          My Projects
        </button>
        <button onClick={() => navigate("/contact")} className="link-btn">
          Contact
        </button>
        <a
          href="https://github.com/nab138"
          target="_blank"
          className="link-btn"
        >
          Github
        </a>
      </div>
    </>
  );
}
