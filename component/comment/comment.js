const Comment = (props) => {
  const { userImg, content, userName, like, dislike, date } = props;
  return (
    <div className="comment_container">
      <div className="comment_user_box">
        <div className="comment_user_img_box">
          <img className="comment_user_img" src={userImg} />
        </div>
        <div className="comment_box">
          <div className="comment_user_text">
            <p className="comment_text_bold">{userName}</p>
            <p className="comment_text">{setDate(date)}</p>
          </div>
          <p className="comment_content">{content}</p>
          <div className="comment_icon_box">
            <div
              className="comment_icon svg"
              style={{
                backgroundImage: `url(./image/common/like.svg)`,
              }}></div>
            <p className="comment_text">{setNumber(like)}</p>
            <div
              className="comment_icon svg"
              style={{
                backgroundImage: `url(./image/common/dislike.svg)`,
              }}></div>
            <div className="comment_icon_text">답글</div>
          </div>
        </div>
      </div>
      <div className="comment_setting_box">
        <div
          className="comment_setting_icon svg"
          style={{
            backgroundImage: `url(./image/common/setting.svg)`,
          }}></div>
      </div>
    </div>
  );
};
