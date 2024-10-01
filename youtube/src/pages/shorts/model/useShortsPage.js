import { useEffect } from "react";

export const useScrollDetection = (onScrollThreshold) => {
  useEffect(() => {
    const handleWheel = (event) => {
      const scroll = event.deltaY;
      if (Math.abs(scroll) >= 80) {
        console.log(event.deltaY);
        onScrollThreshold(); // 메모이제이션된 함수 호출
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [onScrollThreshold]);
};
