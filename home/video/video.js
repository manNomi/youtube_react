const Video = (props) => {
  const { title, thumbImg, userImg, userName, thumbView, thumbDate } = props;
  return (
    <article className="video_group">
      <img className="video_img" src={thumbImg} alt="Video Thumbnail" />
      <div className="video_title">
        <img className="video_user_img" src={userImg} alt="User Image" />
        <div>
          <p className="video_text">{title}</p>
          <p className="video_text_name">{userName}</p>
          <div className="video_text_small_box">
            <p className="video_text_small">{setView(thumbView)}</p>
            <p className="video_text_small">•</p>
            <p className="video_text_small">{setDate(thumbDate)}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
