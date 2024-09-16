import React from "react";
import {
  Group,
  Video,
  Img,
  VideoIconList,
  VideoIcon,
  Title,
  User,
  UserImg,
  SubscribeIcon,
  Text,
  IconContainer,
  IconBox,
  IconBorder,
  Icon,
} from "./style.js"; // 스타일 정의를 import

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
    <Group>
      <Video>
        <Img src={props.shortsData.thumbImg} alt="Video Thumbnail" />
        <VideoIconList>
          <VideoIcon src={playIcon} alt="Play Icon" />
          <VideoIcon src={soundIcon} alt="Sound Icon" />
        </VideoIconList>
        <Title>
          <User>
            <UserImg src={props.shortsData.userImg} alt="UserImage" />
            <Text>{"@" + props.shortsData.userName}</Text>
            <SubscribeIcon>구독</SubscribeIcon>
          </User>
          <Text>{props.shortsData.title}</Text>
        </Title>
      </Video>
      <IconContainer>
        <IconBox>
          <IconBorder>
            <Icon $src={likeIcon} alt="Like Icon" />
          </IconBorder>
          <p>{setNumber(props.shortsData.like)}</p>
        </IconBox>
        <IconBox>
          <IconBorder>
            <Icon $src={dislikeIcon} alt="Dislike Icon" />
          </IconBorder>
        </IconBox>
        <IconBox>
          <IconBorder
            ref={(el) => (commentClickRef.current["comment_btn"] = el)}
            id="comment_btn"
            onClick={() => handleClickOutside(true, "comment_btn")}>
            <Icon $src={commentIcon} />
          </IconBorder>
          <p>{setNumber(props.shortsData.comment)}</p>
        </IconBox>
        <IconBox>
          <IconBorder>
            <Icon $src={shareIcon} alt="Share Icon" />
          </IconBorder>
          <p>공유</p>
        </IconBox>
        <IconBox>
          <IconBorder>
            <Icon $src={settingIcon} alt="Setting Icon" />
          </IconBorder>
        </IconBox>
      </IconContainer>
      {commentState && (
        <ShortsComment
          userImg={props.shortsData.userImg}
          comment={props.shortsData.comment}
          commentList={props.commentList}
          handleClickOutside={handleClickOutside}
          commentClickRef={commentClickRef}
        />
      )}
    </Group>
  );
};

export default ShortsVideo;
