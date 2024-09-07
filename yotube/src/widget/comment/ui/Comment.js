import css from "./Comment.module.css";
import { setDate, setNumber } from "../../../shared/setNumber/setNumber.js";

const Comment = (props) => {
  const { userImg, content, userName, like, dislike, date } = props;
  return (
    <div className={css.container}>
      <div className={css.user_box}>
        <div className={css.user_img_box}>
          <img className={css.user_img} src={userImg} />
        </div>
        <div className={css.box}>
          <div className={css.user_text}>
            <p className={css.text_bold}>{userName}</p>
            <p className={css.text}>{setDate(date)}</p>
          </div>
          <p className={css.content}>{content}</p>
          <div className={css.icon_box}>
            <div
              className={css.icon}
              style={{
                backgroundImage: `url(./image/common/like.svg)`,
              }}></div>
            <p className={css.text}>{setNumber(like)}</p>
            <div
              className={css.icon}
              style={{
                backgroundImage: `url(./image/common/dislike.svg)`,
              }}></div>
            <div className={css.icon_text}>답글</div>
          </div>
        </div>
      </div>
      <div className={css.setting_box}>
        <div
          className={css.setting_icon}
          style={{
            backgroundImage: `url(./image/common/setting.svg)`,
          }}></div>
      </div>
    </div>
  );
};

export default Comment;
