import { useLocation, useNavigate } from "react-router-dom";
import dozer from "../assets/logo.svg";
import { transition } from "../utils/NavigationProvider";

export default function Header({
  children,
  containerRef,
}: {
  children?: React.ReactNode;
  containerRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const navigate = useNavigate();
  const location = useLocation();

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
      {children}
    </>
  );
}
