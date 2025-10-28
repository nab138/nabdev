import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import { transition } from "../utils/NavigationProvider";
import { useEffect, useState } from "react";

export default function Header({
  children,
  containerRef,
  containerRef2,
}: {
  children?: React.ReactNode;
  containerRef: React.RefObject<HTMLSpanElement | null>;
  containerRef2: React.RefObject<HTMLDivElement | null>;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMain = ["/", "/about", "/contact"].includes(location.pathname);
  const realContainerRef = isMain ? containerRef : containerRef2;

  const [_modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const firstVisit = localStorage.getItem("firstVisit");
    if (!firstVisit) {
      localStorage.setItem("firstVisit", "true");
      setTimeout(() => {
        setModalOpen(true);
      }, 1000);
    }
  }, []);

  return (
    <>
      <div
        style={{
          zIndex: 9999,
        }}
        className="logo-container"
      >
        <Logo
          className="logo-img"
          onClick={() => {
            transition("/", realContainerRef, navigate, location);
          }}
        />
      </div>
      {/* {modalOpen && (
        <div className="welcome-modal">
          <div className="welcome-modal-content">
            <h2>⚠️ Under Construction!</h2>
            <p>
              This site is currently under construction. You may encounter bugs,
              placeholder images or text, missing projects, and other unfinished
              elements.
            </p>
            <button onClick={() => setModalOpen(false)}>I understand</button>
          </div>
        </div>
      )} */}
      {children}
    </>
  );
}
