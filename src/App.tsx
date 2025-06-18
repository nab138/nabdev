import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import SlideshowBg from "./pages/SlideshowBg";
import Header from "./pages/Header";
import Project from "./pages/Project";

function App() {
  const containerRef = useRef<HTMLSpanElement | null>(null);

  return (
    <Header containerRef={containerRef}>
      <Routes>
        <Route path="/" element={<SlideshowBg containerRef={containerRef} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/mini-projects" element={<Projects />} />
        <Route path="/mini-projects/:projectId" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Header>
  );
}

export default App;
