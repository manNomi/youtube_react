import { useEffect } from "react";

export const useScrollDetection = (onScrollThreshold) => {
  useEffect(() => {
    const handleWheel = (event) => {
      setTimeout(() => {
        const scroll = event.deltaY;
        if (Math.abs(scroll) >= 80) {
          onScrollThreshold(); // 메모이제이션된 함수 호출
        }
      }, 1000);
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [onScrollThreshold]);
};
