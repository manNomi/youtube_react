import useCommentData from "../../model/useCommentData/useCommentData.js";
import CommentInput from "../../../../widget/comment_input/ui/CommentInput.js";
import Comment from "../../../../widget/comment/ui/Comment.js";
const DetailComment = (props) => {
  const { commentList = [], loading, error } = useCommentData();

  return (
    <>
      {loading ? (
        <div>로딩중</div>
      ) : error ? (
        <div>에러</div>
      ) : !commentList ? (
        <div>로딩중</div>
      ) : (
        <>
          <CommentInput userImg={props.userImg} colorDark={false} />
          {commentList.map((commentData) => (
            <Comment {...commentData} />
          ))}
        </>
      )}
    </>
  );
};

export default DetailComment;
