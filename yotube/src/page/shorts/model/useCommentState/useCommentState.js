import React from "react";
const useCommentState = () => {
  const [commentState, setCommentState] = React.useState(false);
  const visibleCommentState = (type) => {
    setCommentState(type);
  };
  return [commentState, visibleCommentState];
};
export default useCommentState;
