import "./Home.css";
import Typewriter from "../components/Typewriter";
import languages from "../utils/languages";
import { useTransitionNav } from "../utils/NavigationProvider";
import { useEffect } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Home() {
  const { navigate, finishTransition } = useTransitionNav();

  useEffect(() => {
    finishTransition();
  }, [finishTransition]);

  return (
    <>
      <Helmet>
        <title>Home - nabdev</title>
        <meta
          name="description"
          content="Learn more about Nicholas Sharp, his background, and skills."
        />
        <meta property="og:url" content="https://nabdev.me" />
        <meta property="og:title" content="Home - nabdev" />
        <meta
          property="og:description"
          content="Learn more about Nicholas Sharp, his background, and skills."
        />
      </Helmet>
      <h2 className="logo">Nicholas Sharp</h2>
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
