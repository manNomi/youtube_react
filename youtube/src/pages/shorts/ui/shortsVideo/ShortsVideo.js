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
  VideoTag,
  IconWrap,
} from "./style.js"; // 스타일 정의를 import

import useCommentState from "../../model/useCommentState.js";
import { setNumber } from "../../../../shared/setNumber/setNumber.js";
import ShortsComment from "../shortsComment/ShortsComment.js";

import playIcon from "../../../../shared/asset/play_black.js";
import soundIcon from "../../../../shared/asset/sound_black.js";
import { useTheme } from "styled-components";
import { useCommentOpen } from "../../model/scrollDenied.js";

const ShortsVideo = (props) => {
  const [commentClickRef, commentState, handleClickOutside] = useCommentState();
  useCommentOpen(commentState);
  const theme = useTheme();
  return (
    <Group>
      <Video>
        <Img src={props.shortsData.thumbImg} alt="Video Thumbnail" />
        <VideoIconList>
          <VideoIcon alt="Play Icon">
            <VideoTag as={playIcon} />
          </VideoIcon>
          <VideoIcon alt="Play Icon">
            <VideoTag as={soundIcon} />
          </VideoIcon>
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
            <IconWrap alt="Like Icon">
              <Icon as={theme.icons.like} />
            </IconWrap>
          </IconBorder>
          <p>{setNumber(props.shortsData.like)}</p>
        </IconBox>
        <IconBox>
          <IconBorder>
            <IconWrap alt="Like Icon">
              <Icon as={theme.icons.dislike} />
            </IconWrap>
          </IconBorder>
        </IconBox>
        <IconBox>
          <IconBorder
            ref={(el) => (commentClickRef.current["comment_btn"] = el)}
            id="comment_btn"
            onClick={() => handleClickOutside(true, "comment_btn")}>
            <IconWrap alt="Like Icon">
              <Icon as={theme.icons.comment} />
            </IconWrap>
          </IconBorder>
          <p>{setNumber(props.shortsData.comment)}</p>
        </IconBox>
        <IconBox>
          <IconBorder>
            <IconWrap alt="Like Icon">
              <Icon as={theme.icons.share} />
            </IconWrap>
          </IconBorder>
          <p>공유</p>
        </IconBox>
        <IconBox>
          <IconBorder>
            <IconWrap alt="Like Icon">
              <Icon as={theme.icons.setting} />
            </IconWrap>
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
