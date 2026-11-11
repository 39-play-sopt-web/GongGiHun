import { useEffect, useRef, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import * as S from "./ScrollToTopButton.styles";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  //문서 꼭대기의 감시 요소가 화면에서 사라지면 버튼 표시
  useEffect(() => {
    const target = topRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    //동작 죽이기 설정 -> 애니메이션 없이 바로 이동
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <S.TopSentinel ref={topRef} aria-hidden />
      <S.Button
        type="button"
        isVisible={isVisible}
        onClick={handleClick}
        aria-label="맨 위로 이동"
      >
        <IoArrowUp aria-hidden />
      </S.Button>
    </>
  );
};

export default ScrollToTopButton;
