import { setNumber } from "../../../../shared/setNumber/setNumber.js";
import Comment from "../../../../widget/comment/ui/Comment.js";
import CommentInput from "../../../../widget/comment_input/ui/CommentInput.js";
import useShortsCommentData from "../../../../entities/shortsData/useShortsCommentData.js";
import Loading from "../../../../shared/loading/Loading.js";
import arraySrc from "../../../../shared/asset/array_white.js";
import {
  CommentFrame,
  Content,
  CommentNav,
  CommentBox,
  CommentIconBox,
  InputBox,
  CommentExit,
} from "./style.js"; // 새로 정의한 스타일 임포트

const ShortsComment = (props) => {
  const [commentDataList, loading, error] = useShortsCommentData();
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <CommentFrame
      id="dialog"
      ref={(el) => (props.commentClickRef.current["dialog"] = el)}
      onClick={() => {
        props.handleClickOutside(false, "dialog");
      }}>
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <CommentNav>
          <CommentIconBox>
            <p>댓글</p>
            <p>{`${setNumber(props.comment)}개`}</p>
          </CommentIconBox>
          <CommentIconBox>
            <img src={arraySrc} alt="" />
            <CommentExit
              ref={(el) => (props.commentClickRef.current["exitBtn"] = el)}
              onClick={() => {
                props.handleClickOutside(false, "exitBtn");
              }}>
              X
            </CommentExit>
          </CommentIconBox>
        </CommentNav>
        <CommentBox>
          {commentDataList.map((comment) => (
            <Comment {...comment} />
          ))}
        </CommentBox>
        <InputBox>
          <CommentInput userImg={props.userImg} colorDark={true} />
        </InputBox>
      </Content>
    </CommentFrame>
  );
};

export default ShortsComment;
