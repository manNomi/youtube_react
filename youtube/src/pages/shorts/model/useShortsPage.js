import { useEffect } from "react"; // React도 함께 임포트

export const useScrollDetection = (onScrollThreshold) => {
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) >= 40) {
        onScrollThreshold();
        lastScrollY = currentScrollY;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollThreshold]);
};
