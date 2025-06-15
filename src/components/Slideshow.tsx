import { useState, useRef, useEffect, useCallback } from "react";
import "./Slideshow.css";

export default function Slideshow({
  slides,
  isBackground,
  autoSwitchTime,
}: {
  slides: {
    name: string;
    desc: string;
    image: string;
    link: string;
  }[];
  isBackground: boolean;
  autoSwitchTime: number;
}) {
  const [curSlide, setCurSlide] = useState<number>(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setPrevSlide(curSlide);
    setCurSlide((old) => {
      const next = (old - 1 + slides.length) % slides.length;
      setIsAnimating(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setPrevSlide(null);
        setIsAnimating(false);
      }, 500);
      return next;
    });
  }, [isAnimating, curSlide]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setPrevSlide(curSlide);
    setCurSlide((old) => {
      const next = (old + 1) % slides.length;
      setIsAnimating(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setPrevSlide(null);
        setIsAnimating(false);
      }, 500);
      return next;
    });
  }, [isAnimating, curSlide]);

  useEffect(() => {
    const slideChange = setInterval(handleNext, autoSwitchTime);
    return () => clearInterval(slideChange);
  }, [handleNext]);

  return (
    <div className="slideshow-container">
      <div className="slide-track">
        {prevSlide !== null && (
          <div
            className={`slide slide-anim-out slide-${direction}`}
            key={prevSlide}
          >
            <img
              src={slides[prevSlide].image}
              alt={slides[prevSlide].name}
              className="slide-img"
              loading={prevSlide === 0 ? "eager" : "lazy"}
            />
          </div>
        )}
        <div
          className={`slide ${
            prevSlide !== null ? `slide-anim-in slide-${direction}` : ""
          }`}
          key={curSlide}
        >
          <img
            src={slides[curSlide].image}
            alt={slides[curSlide].name}
            className={"slide-img" + (isBackground ? " slide-bg-img" : "")}
            loading={curSlide === 0 ? "eager" : "lazy"}
          />
        </div>
        <div className="slide-info-box"></div>
      </div>
    </div>
  );
}
