import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCommentState } from "../../../shared/reudx/action/shortsCommentAction";

const useCommentState = () => {
  const commentVisible = useSelector((store) => store.comment_visible);
  const commentClickRef = React.useRef({});
  const handleClickOutside = (type, id) => {
    if (commentClickRef.current[id]) {
      dispatch(changeCommentState(type));
    }
  };
  const dispatch = useDispatch();

  return [commentClickRef, commentVisible, handleClickOutside];
};
export default useCommentState;
