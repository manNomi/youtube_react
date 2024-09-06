const ShortsVideo = (props) => {
  const [commentState, visibleCommentState] = useCommentState();
  const shortsList = props.shortsData;
  const commentList = props.commentData;
  return (
    <article className="shorts_group">
      <div className="shorts_video">
        <img
          className="shorts_img"
          src={shortsList.thumbImg}
          alt="Video Thumbnail"
        />
        <div className="shorts_video_icon_list">
          <img
            className="shorts_video_icon"
            src={IconData.playSrc}
            alt="Play Icon"
          />
          <img
            className="shorts_video_icon"
            src={IconData.soundSrc}
            alt="Sound Icon"
          />
        </div>
        <div className="shorts_title">
          <div className="shorts_user">
            <img
              className="shorts_user_img"
              src={shortsList.userImg}
              alt="User Image"
            />
            <p className="shorts_text">{"@" + shortsList.userName}</p>
            <div className="shorts_subscribe_icon">구독</div>
          </div>
          <div className="shorts_text">{shortsList.title}</div>
        </div>
      </div>
      <div className="shorts_icon_container">
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <img
              className="shorts_icon svg"
              src={IconData.likeSrc}
              alt="Like Icon"
            />
          </div>
          <p className="shorts_text_icon_list">{setNumber(shortsList.like)}</p>
        </div>
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <img
              className="shorts_icon svg"
              src={IconData.dislikeSrc}
              alt="Dislike Icon"
            />
          </div>
        </div>
        <div className="shorts_icon_box">
          <div
            className="shorts_icon_border"
            onClick={() => {
              visibleCommentState(true);
            }}>
            <div
              className="shorts_icon svg"
              style={{ backgroundImage: `url(${IconData.commentSrc})` }}
            />
          </div>
          <p className="shorts_text_icon_list">
            {setNumber(shortsList.comment)}
          </p>
        </div>
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <img
              className="shorts_icon svg"
              src={IconData.shareSrc}
              alt="Share Icon"
            />
          </div>
          <p className="shorts_text_icon_list">공유</p>
        </div>
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <img
              className="shorts_icon svg"
              src={IconData.settingSrc}
              alt="Setting Icon"
            />
          </div>
        </div>
      </div>
      <ShortsComment
        userImg={shortsList.userImg}
        comment={shortsList.comment}
        commentList={commentList}
        commentState={commentState}
        visibleComment={visibleCommentState}
      />
    </article>
  );
};
