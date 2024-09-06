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

const setDate = (num) => {
  if (num > 365) {
    return `${Math.round(num / 365)}년전`;
  } else if (num > 3) {
    return `${Math.round(num / 30)}달전`;
  } else if (num > 7) {
    return `${Math.round(num / 7)}주전`;
  } else {
    return `${num} 일전`;
  }
};

const setView = (num) => {
  if (num > 10000) {
    return `${Math.round(num / 10000)}만회`;
  } else if (num > 1000) {
    return `${Math.round(num / 1000)}천회`;
  } else {
    return `${num}회`;
  }
};
