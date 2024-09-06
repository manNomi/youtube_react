const ShortsComment = (props) => {
  return (
    <dialog
      className={
        props.commentState === true
          ? "shorts_comment_frame"
          : "shorts_comment_frame_none"
      }
      onClick={() => {
        props.visibleComment(false);
      }}>
      <article className="shorts_content">
        <nav className="shorts_comment_nav">
          <div className="shorts_comment_icon_box">
            <p className="shorts_comment_bold">댓글</p>
            <p className="shorts_comment">{`${setNumber(props.comment)}개`}</p>
          </div>
          <div className="shorts_comment_icon_box">
            <img
              className="shorts_comment_icon"
              src="./image/shorts/array.svg"
            />
            <p className="shorts_comment_exit">X</p>
          </div>
        </nav>
        <div className="shorts_comment_box">
          {props.commentList.map((comment) => (
            <Comment {...comment} />
          ))}
        </div>

        <div className="shorts_input_box">
          <CommentInput userImg={props.userImg} colorDark={true} />
        </div>
      </article>
    </dialog>
  );
};
