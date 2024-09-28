import React from "react";
const useCommentState = () => {
  const [commentState, setCommentState] = React.useState(false);
  const commentClickRef = React.useRef({});
  const handleClickOutside = (type, id) => {
    if (commentClickRef.current[id]) {
      setCommentState(type);
    }
  };
  return [commentClickRef, commentState, handleClickOutside];
};
export default useCommentState;
