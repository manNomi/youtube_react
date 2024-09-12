import useDetailData from "../../../../entities/useDetailData/useDetailData.js";
import css from "./Detail.module.css";
import DetailComment from "../detailComment/DetailComment.js";
import Loading from "../../../../shared/loading/Loading.js";
import { setNumber, setDate } from "../../../../shared/setNumber/setNumber.js";

import alertSrc from "../../asset/alert.svg";
import arrowSrc from "../../asset/arrow.svg";
import likeSrc from "../../asset/like.svg";
import dislikeSrc from "../../asset/dislike.svg";
import shareSrc from "../../asset/share.svg";
import settingSrc from "../../asset/setting.svg";
import arraySrc from "../../asset/array.svg";

const Detail = () => {
  const [detailList, loading, error] = useDetailData();
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <main className={css.frame}>
      <article className={css.group}>
        <div className={css.video}>
          <img className={css.img} src={detailList.thumbImg} alt="Thumbnail" />
          <div className={css.title}>
            <div className={css.title_text}>{detailList.title}</div>
            <div className={css.user_title}>
              <div className={css.user}>
                <img
                  className={css.user_img}
                  src={detailList.userImg}
                  alt="User"
                />
                <div className={css.user_text}>
                  <p className={css.text}>{detailList.userName}</p>
                  <p className={css.text_small}>{`구독자 ${setNumber(
                    detailList.subscriber
                  )}명`}</p>
                </div>
              </div>
              <button className={css.icon_border}>
                <img className={css.icon} src={alertSrc} alt="Alert Icon" />
                <p className={css.title_icon_text}>구독중</p>
                <img className={css.icon} src={arrowSrc} alt="Arrow Icon" />
              </button>

              <button className={css.like_border}>
                <div className={css.like_box}>
                  <div className={css.like}>
                    <img className={css.icon} src={likeSrc} alt="Like Icon" />
                    <p className={css.like_text}>{`${setNumber(
                      detailList.like
                    )}`}</p>
                  </div>
                </div>
                <div className={css.dislike_box}>
                  <div className={css.dislike}>
                    <img
                      className={css.icon}
                      src={dislikeSrc}
                      alt="Dislike Icon"
                    />
                  </div>
                </div>
              </button>

              <button className={css.icon_border}>
                <img className={css.icon} src={shareSrc} alt="Share Icon" />
                <p className={css.title_icon_text}>공유</p>
              </button>

              <button className={css.icon_border}>
                <img className={css.icon} src={settingSrc} alt="Setting Icon" />
              </button>
            </div>
          </div>
        </div>
        <div className={css.introduce}>
          {`조회수 ${setNumber(detailList.view)}회 ${setDate(
            detailList.date
          )} ${detailList.content}`}
        </div>
        <div className={css.comment_count}>
          <p className={css.comment_count_text}>{`댓글 ${setNumber(
            detailList.comment
          )}개`}</p>
          <div className={css.comment_array}>
            <div
              className={`${css.comment_array_icon} svg`}
              style={{ backgroundImage: `url(${arraySrc})` }}></div>
            <p className={css.comment_array_text}>정렬 기준</p>
          </div>
          <DetailComment user_img={detailList.userImg} />
        </div>
      </article>
    </main>
  );
};

export default Detail;
