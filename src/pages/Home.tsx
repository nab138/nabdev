import projects from "../projects";
import "./Home.css";
import Slideshow from "../components/Slideshow";

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
              link: "/" + p.id,
            };
          })}
        />
      </div>
      <span className="home-content-container">
        <h1 className="logo">nabdev</h1>
      </span>
    </div>
  );
}
