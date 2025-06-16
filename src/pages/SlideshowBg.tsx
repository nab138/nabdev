import projects from "../utils/projects";
import "./SlideshowBg.css";
import Slideshow from "../components/Slideshow";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { NavigationProvider } from "../utils/NavigationProvider";

export default function SlideshowBg({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const [curSlide, setCurSlide] = useState<number>(0);

  return (
    <div className="slideshow-bg-container">
      <div className="slideshow-bg-slide-container">
        <Slideshow
          setCurSlide={setCurSlide}
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
      <span className="slideshow-bg-content-container" ref={containerRef}>
        <NavigationProvider
          containerRef={containerRef}
          state={{ transitionProject: curSlide.toString() }}
        >
          <Outlet />
        </NavigationProvider>
      </span>
    </div>
  );
}
