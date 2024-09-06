const Detail = () => {
  const {
    detailList,
    loading: detailLoading,
    error: detailError,
  } = useGetDetailData();

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
  } = detailList;

  return detailLoading || commentLoading ? (
    <div>로딩중</div>
  ) : detailError || commentError ? (
    <div>에러</div>
  ) : (
    <main className="detail_frame">
      <article className="detail_group">
        <div className="detail_video">
          <img className="detail_img" src={thumbImg} alt="Thumbnail" />
          <div className="detail_title">
            <div className="detail_title_text">{title}</div>
            <div className="detail_user_title">
              <div className="detail_user">
                <img className="detail_user_img" src={userImg} alt="User" />
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
                    <img
                      className="detail_icon"
                      src={likeSrc}
                      alt="Like Icon"
                    />
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
          {`조회수 ${setNumber(view)}회 ${setDate(date)} ${content}`}
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
      </article>
    </main>
  );
};
