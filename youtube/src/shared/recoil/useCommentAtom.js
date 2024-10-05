import { atom, useSetRecoilState } from "recoil";
import { useRecoilValue, useRecoilState } from "recoil";

const commentAtom = atom({
  key: "comment_ATOM",
  default: false,
});

const useCommentAtom = () => {
  const comment = useRecoilValue(commentAtom);
  const setComment = useSetRecoilState(commentAtom);
  const setCommentEvent = (comment_name) => {
    setComment(comment_name);
  };
  return [comment, setCommentEvent];
};
export default useCommentAtom;
