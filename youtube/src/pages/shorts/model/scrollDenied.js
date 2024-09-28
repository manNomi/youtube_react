import { useEffect } from "react";
export const useCommentOpen = (type) => {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [type]);
};
