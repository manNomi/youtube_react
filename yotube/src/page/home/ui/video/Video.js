import css from "./Video.module.css";
import { setView, setDate } from "../../../../shared/setNumber/setNumber.js";

const Video = (props) => {
  return (
    <article className={css.group}>
      <img className={css.img} src={props.thumbImg} alt="" />
      <div className={css.title}>
        <img className={css.user_img} src={props.userImg} alt="" />
        <div>
          <p className={css.text}>{props.title}</p>
          <p className={css.text_name}>{props.userName}</p>
          <div className={css.text_small_box}>
            <p className={css.text_small}>{setView(props.thumbView)}</p>
            <p className={css.text_small}>•</p>
            <p className={css.text_small}>{setDate(props.thumbDate)}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Video;
