import dozer from "../assets/dozer.svg";
import { Link } from "react-router-dom";
import "./404.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="lost-dozer">
        <img src={dozer} alt="Dozer" />
        <h1>?</h1>
      </div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className="link-btn" to="/">
        Take me home
      </Link>
    </div>
  );
}
