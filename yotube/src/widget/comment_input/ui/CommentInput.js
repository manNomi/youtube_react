import css from "./CommentInput.module.css";
const CommentInput = (props) => {
  return (
    <div className={css.write}>
      <img className={css.img} src={props.userImg} alt="userImg" />
      <input
        type="text"
        placeholder="댓글 추가 ..."
        className={`${css.write_input} ${props.colorDark && css.dark_input}`}
      />
    </div>
  );
};
export default CommentInput;
