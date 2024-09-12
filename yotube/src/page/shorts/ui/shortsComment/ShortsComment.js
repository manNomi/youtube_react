import css from "./ShortsComment.module.css";
import { setNumber } from "../../../../shared/setNumber/setNumber.js";
import Comment from "../../../../widget/comment/ui/Comment.js";
import CommentInput from "../../../../widget/comment_input/ui/CommentInput.js";
import useShortsCommentData from "../../../../entities/useShortsCommentData/useShortsCommentData.js";
import Loading from "../../../../shared/loading/Loading.js";
import arraySrc from "../../asset/array.svg";

const ShortsComment = (props) => {
  const [commentDataList, loading, error] = useShortsCommentData();
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <dialog
      id="dialog"
      className={css.comment_frame}
      ref={(el) => (props.commentClickRef.current["dialog"] = el)}
      onClick={() => {
        props.handleClickOutside(false, "dialog");
      }}>
      <article
        className={css.content}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <nav className={css.comment_nav}>
          <div className={css.comment_icon_box}>
            <p className={css.comment_bold}>댓글</p>
            <p className={css.comment}>{`${setNumber(props.comment)}개`}</p>
          </div>
          <div className={css.comment_icon_box}>
            <img className={css.comment_icon} src={arraySrc} alt="" />
            <button
              ref={(el) => (props.commentClickRef.current["exitBtn"] = el)}
              onClick={() => {
                props.handleClickOutside(false, "exitBtn");
              }}
              className={css.comment_exit}>
              X
            </button>
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
