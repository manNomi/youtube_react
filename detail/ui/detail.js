const Detail = () => {
  const {
    likeSrc,
    dislikeSrc,
    shareSrc,
    settingSrc,
    alertSrc,
    arrowSrc,
    arraySrc,
  } = DetailIconData;

  const [contentDataList, setContentDataList] = React.useState([]);
  const [detailList, setDetailList] = React.useState([]);
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

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const detailData = getDetailData();
        setDetailList(detailData);

        const commentData = getCommentData();
        setContentDataList(commentData);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }
  if (error) {
    return <div>오류 입니다</div>;
  }

  return (
    <main className="detail_frame">
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

        <CommentInput userImg={userImg} colorDark={false} />
        {contentDataList.map((contentData) => (
          <Comment {...contentData} />
        ))}
      </article>
    </main>
  );
};

const getCommentData = () => {
  const index = 15;
  const content = {
    userImg: "./image/main/user_img.jpg",
    userName: "괴루무루쥐",
    content: "내용이 이쓸까요 업쓸까요 ? ",
    like: 441231,
    dislike: 124,
    date: 123123,
  };
  const contentList = [];
  for (let i = 0; i < index; i++) {
    contentList.push(content);
  }
  return contentList;
};

const getDetailData = () => {
  const detailData = {
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
    thumbImg: "./image/detail/play_img.png",
    userImg: "./image/main/user_img.jpg",
    userName: "올끌 (All of MBClassic)",
    like: 441231,
    dislike: 124,
    comment: 123,
    view: 123123123,
    date: 1233,
    subscriber: 12312313,
    content: `▷치지직 생방송 - https://naver.me/IFIAjKrC
    ▶MONSRAT굿즈 - https://www.charonstore.com/
    ▷괴물쥐 공식 카페 - https://cafe.naver.com/tmxk9999`,
  };
  return detailData;
};

const DetailIconData = {
  likeSrc: "./image/detail/like.svg",
  dislikeSrc: "./image/detail/dislike.svg",
  shareSrc: "./image/detail/share.svg",
  settingSrc: "./image/detail/setting.svg",
  alertSrc: "./image/detail/alert.svg",
  arrowSrc: "./image/detail/arrow.svg",
  arraySrc: "./image/detail/array.sng",
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
