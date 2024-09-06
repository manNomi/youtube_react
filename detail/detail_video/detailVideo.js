const DetailVideo = (props) => {
  const {
    title,
    thumbImg,
    userImg,
    userName,
    like,
    dislike,
    comment,
    view,
    date,
    content,
    subscriber,
  } = props.detailData;
  const {
    likeSrc,
    dislikeSrc,
    shareSrc,
    settingSrc,
    alertSrc,
    arrowSrc,
    arraySrc,
  } = props.IconData;

  return (
    <article className="detail_group">
      <div className="detail_video">
        <img className="detail_img" src={thumbImg} />
        <div className="detail_title">
          <div className="detail_title_text">{title}</div>
          <div className="detail_user_title">
            <div className="detail_user">
              <img className="detail_user_img" src={userImg} />
              <div className="detail_user_text">
                <p className="detail_text">{userName}</p>
                <p className="detail_text_small">{`구독자 ${setNumber(
                  subscriber
                )}명`}</p>
              </div>
            </div>
            <button className="detail_icon_border">
              <img className="detail_icon" src={alertSrc} alt="Alert Icon" />
              <p className="detail_title_icon_text">구독중</p>
              <img className="detail_icon" src={arrowSrc} alt="Arrow Icon" />
            </button>

            <button className="detail_like_border">
              <div className="detail_like_box">
                <div className="detail_like">
                  <img className="detail_icon" src={likeSrc} alt="Like Icon" />
                  <p className="detail_like_text">{`${setNumber(like)}`}</p>
                </div>
              </div>
              <div className="detail_dislike_box">
                <div className="detail_dislike">
                  <img
                    className="detail_icon"
                    src={dislikeSrc}
                    alt="Dislike Icon"
                  />
                </div>
              </div>
            </button>

            <button className="detail_icon_border">
              <img className="detail_icon" src={shareSrc} alt="Share Icon" />
              <p className="detail_title_icon_text">공유</p>
            </button>

            <button className="detail_icon_border">
              <img
                className="detail_icon"
                src={settingSrc}
                alt="Setting Icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="detail_introduce">
        {`조회수${setNumber(view)}회 ${setDate(date)}
          ${content}`}
      </div>
      <div className="detail_comment_count">
        <p className="detail_comment_count_text">{`댓글 ${setNumber(
          comment
        )}개`}</p>
        <div className="detail_comment_array">
          <div
            className="detail_comment_array_icon svg"
            style={{ backgroundImage: `url(${arraySrc})` }}></div>
          <p className="detail_comment_array_text">정렬 기준</p>
        </div>
      </div>
      <div className="detail_comment_wirte">
        <img className="detail_user_img" src={userImg} />
        <input
          type="text"
          placeholder="댓글 추가 ..."
          className="detail_comment_write_input"></input>
      </div>
    </article>
  );
};
const setNumber = (num) => {
  if (num > 10000) {
    return `${Math.round(num / 10000)}만`;
  } else if (num > 1000) {
    return `${Math.round(num / 1000)}천`;
  } else {
    return `${num}`;
  }
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
