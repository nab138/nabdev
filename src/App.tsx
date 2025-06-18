import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { useRef } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import SlideshowBg from "./pages/SlideshowBg";
import Header from "./pages/Header";
import Project from "./pages/Project";
import { NavigationProvider } from "./utils/NavigationProvider";

function App() {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const containerRef2 = useRef<HTMLDivElement | null>(null);

  return (
    <Header containerRef={containerRef} containerRef2={containerRef2}>
      <Routes>
        <Route path="/" element={<SlideshowBg containerRef={containerRef} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/" element={<Container containerRef={containerRef2} />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="/mini-projects" element={<Projects key={"mini"} />} />
          <Route path="/mini-projects/:projectId" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Header>
  );
}

export default App;

function Container({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLSpanElement | null>;
}) {
  return (
    <span className="container" ref={containerRef}>
      <NavigationProvider containerRef={containerRef}>
        <Outlet />
      </NavigationProvider>
    </span>
  );
}
