import "./Contact.css";
import { useEffect } from "react";
import { useTransitionNav } from "../utils/NavigationProvider";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Contact() {
  const { navigate, finishTransition } = useTransitionNav();

  useEffect(() => {
    finishTransition();
  }, [finishTransition]);

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - nabdev</title>
        <meta name="description" content="Get in touch with Nick." />
        <meta property="og:url" content="https://nabdev.me/contact" />
        <meta property="og:title" content="Contact - nabdev" />
        <meta property="og:description" content="Get in touch with Nick." />
      </Helmet>
      <div>
        <h1>Contact</h1>
        <h2>I can't wait to hear from you!</h2>
      </div>
      <ul className="contact-list">
        <li>
          <b>Email</b>: <a href="mailto:nab@nabdev.me">nab@nabdev.me</a>
        </li>
        <li>
          <b>GitHub</b>:{" "}
          <a href="https://github.com/nab138">https://github.com/nab138</a>
        </li>
        <li>
          <b>Chief Delphi</b>:{" "}
          <a href="https://www.chiefdelphi.com/u/nab138">nab138</a>
        </li>
        <li>
          <b>Discord</b>: nab138
        </li>
      </ul>
      <button onClick={() => navigate("/")} className="link-btn contact-btn">
        Home
      </button>
    </div>
  );
}
