import { useState, useRef, useEffect, useCallback } from "react";
import "./Slideshow.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Slideshow({
  slides,
  isBackground,
  autoSwitchTime,
  contain,
  setCurSlide: setCurSlideP,
}: {
  slides: {
    name: string;
    desc: string;
    image: string;
    link: string;
  }[];
  isBackground: boolean;
  autoSwitchTime: number;
  contain?: boolean;
  setCurSlide?: (index: number) => void;
}) {
  const [curSlide, setCurSlide] = useState<number>(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const toSlide = useCallback(
    (index: number) => {
      if (isAnimating || curSlide == index) return;
      setDirection(curSlide > index ? "left" : "right");
      setPrevSlide(curSlide);
      setCurSlide(() => {
        setIsAnimating(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setPrevSlide(null);
          setIsAnimating(false);
        }, 500);
        return index;
      });
    },
    [isAnimating, curSlide]
  );

  const toNext = useCallback(() => {
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

  const toPrev = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setPrevSlide(curSlide);
    setCurSlide((old) => {
      const prev = (old - 1 + slides.length) % slides.length;
      setIsAnimating(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setPrevSlide(null);
        setIsAnimating(false);
      }, 500);
      return prev;
    });
  }, [isAnimating, curSlide]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const slideChange = setInterval(toNext, autoSwitchTime);
    return () => clearInterval(slideChange);
  }, [toNext]);

  useEffect(() => {
    if (setCurSlideP) setCurSlideP(curSlide);
  }, [curSlide, setCurSlideP]);

  let SlideContent = ({ index }: { index: number }) => {
    return (
      <>
        <img
          src={slides[index].image}
          alt={slides[index].name}
          className={
            "slide-img" +
            (isBackground ? " slide-bg-img" : "") +
            (contain ? " slide-contain" : "")
          }
          loading={index === curSlide ? "eager" : "lazy"}
        />

        {!isBackground && (
          <div
            onClick={toPrev}
            className={
              "slide-control slide-prev" +
              (isAnimating ? " slide-control-disabled" : "")
            }
          >
            &lt;
          </div>
        )}
        {!isBackground && (
          <div
            onClick={toNext}
            className={
              "slide-control slide-next" +
              (isAnimating ? " slide-control-disabled" : "")
            }
          >
            &gt;
          </div>
        )}
        {slides[index].name && (
          <div
            className="slide-info-box"
            onClick={() => {
              navigate(slides[index].link);
            }}
          >
            <div className="slide-info-header">
              <FaExternalLinkAlt size={18} />
              <h3>{slides[index].name}</h3>
            </div>
            <p>{slides[index].desc}</p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slide-track">
        {prevSlide !== null && (
          <div
            className={`slide slide-anim-out slide-${direction}`}
            key={prevSlide}
          >
            <SlideContent index={prevSlide} />
          </div>
        )}
        <div
          className={`slide ${
            prevSlide !== null ? `slide-anim-in slide-${direction}` : ""
          }`}
          key={curSlide}
        >
          <SlideContent index={curSlide} />
        </div>
      </div>
      {slides.length > 1 && (
        <div className="slide-circles">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`slide-circle${i == curSlide ? " active-slide" : ""}`}
              onClick={() => toSlide(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
