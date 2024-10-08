import css from "./ShortsVideo.module.css";
import useCommentState from "../../model/useCommentState/useCommentState.js";
import { setNumber } from "../../../../shared/setNumber/setNumber.js";
import ShortsComment from "../shortsComment/ShortsComment.js";
import playIcon from "../../asset/play.svg";
import soundIcon from "../../asset/sound.svg";
import likeIcon from "../../asset/like.svg";
import dislikeIcon from "../../asset/dislike.svg";
import shareIcon from "../../asset/share.svg";
import settingIcon from "../../asset/setting.svg";
import commentIcon from "../../asset/comment.svg";

const ShortsVideo = (props) => {
  const [commentClickRef, commentState, handleClickOutside] = useCommentState();

  return (
    <article className={css.group}>
      <div className={css.video}>
        <img
          className={css.img}
          src={props.shortsData.thumbImg}
          alt="Video Thumbnail"
        />
        <div className={css.video_icon_list}>
          <img className={css.video_icon} src={playIcon} alt="Play Icon" />
          <img className={css.video_icon} src={soundIcon} alt="Sound Icon" />
        </div>
        <div className={css.title}>
          <div className={css.user}>
            <img
              className={css.user_img}
              src={props.shortsData.userImg}
              alt="UserImage"
            />
            <p className={css.text}>{"@" + props.shortsData.userName}</p>
            <div className={css.subscribe_icon}>구독</div>
          </div>
          <div className={css.text}>{props.shortsData.title}</div>
        </div>
      </div>
      <div className={css.icon_container}>
        <div className={css.icon_box}>
          <div className={css.icon_border}>
            <img className={css.icon} src={likeIcon} alt="Like Icon" />
          </div>
          <p className={css.text_icon_list}>
            {setNumber(props.shortsData.like)}
          </p>
        </div>
        <div className={css.icon_box}>
          <div className={css.icon_border}>
            <img className={css.icon} src={dislikeIcon} alt="Dislike Icon" />
          </div>
        </div>
        <div className={css.icon_box}>
          <div
            className={css.icon_border}
            ref={(el) => (commentClickRef.current["comment_btn"] = el)}
            id="comment_btn"
            onClick={() => handleClickOutside(true, "comment_btn")}>
            <div
              className={css.icon}
              style={{ backgroundImage: `url(${commentIcon})` }}
            />
          </div>
          <p className={css.text_icon_list}>
            {setNumber(props.shortsData.comment)}
          </p>
        </div>
        <div className={css.icon_box}>
          <div className={css.icon_border}>
            <img className={css.icon} src={shareIcon} alt="Share Icon" />
          </div>
          <p className={css.text_icon_list}>공유</p>
        </div>
        <div className={css.icon_box}>
          <div className={css.icon_border}>
            <img className={css.icon} src={settingIcon} alt="Setting Icon" />
          </div>
        </div>
      </div>
      {commentState && (
        <ShortsComment
          userImg={props.shortsData.userImg}
          comment={props.shortsData.comment}
          commentList={props.commentList}
          handleClickOutside={handleClickOutside}
          commentClickRef={commentClickRef}
        />
      )}
    </article>
  );
};

export default ShortsVideo;
