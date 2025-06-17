import { useEffect } from "react";
import { useTransitionNav } from "../utils/NavigationProvider";

export default function Contact() {
  const { finishTransition } = useTransitionNav();

  useEffect(() => {
    finishTransition();
  }, [finishTransition]);

  return <h1>Contact</h1>;
}
