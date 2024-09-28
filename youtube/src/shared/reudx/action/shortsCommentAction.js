export const changeCommentState = (commentState) => {
  const action = {
    type: "CHANGE_COMMENT",
    comment_visible: commentState,
  };
  return action;
};

export const resetCommentState = () => {
  const aciton = {
    type: "RESET_COMMENT",
  };
  return aciton;
};
