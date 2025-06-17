import { useLocation, useNavigate } from "react-router-dom";
import dozer from "../assets/logo.svg";
import { transition } from "../utils/NavigationProvider";
import { useEffect, useState } from "react";

export default function Header({
  children,
  containerRef,
}: {
  children?: React.ReactNode;
  containerRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [modalOpen, setModalOpen] = useState(false);

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
        <img
          className="logo-img"
          src={dozer}
          alt="Dozer"
          onClick={() => transition("/", containerRef, navigate, location)}
        />
      </div>
      {modalOpen && (
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
      )}
      {children}
    </>
  );
}
