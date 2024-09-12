import css from "./Video.module.css";
import { setView, setDate } from "../../../../shared/setNumber/setNumber.js";

const Video = (props) => {
  return (
    <article className={css.group} onClick={() => props.onPageClick("detail")}>
      <img className={css.img} src={props.videoData.thumbImg} alt="" />
      <div className={css.title}>
        <img className={css.user_img} src={props.videoData.userImg} alt="" />
        <div>
          <p className={css.text}>{props.videoData.title}</p>
          <p className={css.text_name}>{props.videoData.userName}</p>
          <div className={css.text_small_box}>
            <p className={css.text_small}>
              {setView(props.videoData.thumbView)}
            </p>
            <p className={css.text_small}>•</p>
            <p className={css.text_small}>
              {setDate(props.videoData.thumbDate)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Video;
