import { Write, UserImg, WriteInput } from "./style.js";

const CommentInput = (props) => {
  return (
    <Write>
      <UserImg src={props.userImg} alt="userImg" />
      <WriteInput
        type="text"
        placeholder="댓글 추가 ..."
        colorDark={props.colorDark}
      />
    </Write>
  );
};

export default CommentInput;
