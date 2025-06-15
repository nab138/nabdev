import "./Typewriter.css";
import { useEffect, useState } from "react";

const typeSpeed = 180;
const deleteSpeed = 50;
const deletePause = 800;

export default function Typewriter({ options }: { options: string[] }) {
  const [curText, setCurText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (options.length === 0) return;
    let timeout: number;
    const currentWord = options[wordIndex];

    if (!isDeleting && letterIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setCurText(currentWord.slice(0, letterIndex + 1));
        setLetterIndex((i) => i + 1);
      }, typeSpeed);
    } else if (!isDeleting && letterIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, deletePause);
    } else if (isDeleting && letterIndex > 0) {
      timeout = setTimeout(() => {
        setCurText(currentWord.slice(0, letterIndex - 1));
        setLetterIndex((i) => i - 1);
      }, deleteSpeed);
    } else if (isDeleting && letterIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % options.length);
      }, typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [letterIndex, wordIndex, isDeleting, options]);

  return (
    <div className="typewriter-container">
      <h1 className="typewriter">{curText}</h1>
      <div className="typewriter-cursor" />
    </div>
  );
}
