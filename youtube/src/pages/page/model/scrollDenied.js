import { useEffect } from "react";
export const useScrollDenied = (type) => {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [type]);
};
