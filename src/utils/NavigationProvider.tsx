import React, { createContext, useCallback, useContext } from "react";
import type { ReactNode } from "react";
import {
  useNavigate,
  type NavigateFunction,
  useLocation,
  type Location,
} from "react-router-dom";

interface NavigationContextProps {
  navigate: (path: string, noAnimation?: boolean) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);
export const transition = (
  to: string,
  containerRef: React.RefObject<HTMLSpanElement | null>,
  nav: NavigateFunction,
  location: Location<any>,
  state?: { transitionProject?: string },
  noAnimation?: boolean
) => {
  if (location.pathname === to) return;
  if (!containerRef.current || noAnimation) {
    nav(to, { state });
    return;
  }
  containerRef.current.classList.add("invisible");
  setTimeout(() => {
    containerRef.current!.classList.remove("invisible");
    nav(to, { state });
  }, 250);
};

export function NavigationProvider({
  children,
  containerRef,
  state,
}: {
  children: ReactNode;
  containerRef: React.RefObject<HTMLSpanElement | null>;
  state?: { transitionProject?: string };
}) {
  const nav = useNavigate();
  const location = useLocation();

  const navigate = useCallback(
    (to: string, noAnimation?: boolean) => {
      transition(to, containerRef, nav, location, state, noAnimation);
    },
    [nav, containerRef, location.pathname, state]
  );

  return (
    <NavigationContext.Provider value={{ navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useTransitionNav = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useTransitionNav must be used within a NavigationProvider"
    );
  }
  return context;
};
