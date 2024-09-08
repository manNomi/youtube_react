import css from "./ShortsComment.module.css";
import { setNumber } from "../../../../shared/setNumber/setNumber.js";
import Comment from "../../../../widget/comment/ui/Comment.js";
import CommentInput from "../../../../widget/comment_input/ui/CommentInput.js";
import useShortsCommentData from "../../model/useShortsCommentData/useShortsCommentData.js";

const ShortsComment = (props) => {
  const [commentDataList, loading, error] = useShortsCommentData();

  console.log(commentDataList);
  return loading ? (
    <div>로딩중</div>
  ) : error ? (
    <div>에러</div>
  ) : (
    <dialog
      className={
        props.commentState === true ? css.comment_frame : css.comment_frame_none
      }
      onClick={() => {
        props.visibleComment(false);
      }}>
      <article className={css.content}>
        <nav className={css.comment_nav}>
          <div className={css.comment_icon_box}>
            <p className={css.comment_bold}>댓글</p>
            <p className={css.comment}>{`${setNumber(props.comment)}개`}</p>
          </div>
          <div className={css.comment_icon_box}>
            <img className={css.comment_icon} src="./image/shorts/array.svg" />
            <p className={css.comment_exit}>X</p>
          </div>
        </nav>
        <div className={css.comment_box}>
          {commentDataList.map((comment) => (
            <Comment {...comment} />
          ))}
        </div>

        <div className={css.input_box}>
          <CommentInput userImg={props.userImg} colorDark={true} />
        </div>
      </article>
    </dialog>
  );
};
export default ShortsComment;
