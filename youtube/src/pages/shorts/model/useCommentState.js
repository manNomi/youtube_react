import React from "react";

import useCommentAtom from "../../../shared/recoil/useCommentAtom.js";

const useCommentState = () => {
  const [commentVisible, commentSetEvent] = useCommentAtom();
  const commentClickRef = React.useRef({});
  const handleClickOutside = (type, id) => {
    if (commentClickRef.current[id]) {
      commentSetEvent(type);
    }
  };
  return [commentClickRef, commentVisible, handleClickOutside];
};
export default useCommentState;
