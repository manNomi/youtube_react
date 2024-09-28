import useDetailData from "../../../../entities/detailData/useDetailData.js";
import DetailComment from "../detailComment/DetailComment.js";
import Loading from "../../../../shared/loading/Loading.js";
import { setNumber, setDate } from "../../../../shared/setNumber/setNumber.js";

import alertSrc from "../../../../shared/asset/alert_white.js";
import arrowSrc from "../../../../shared/asset/arrow_white.js";
import likeSrc from "../../../../shared/asset/like_white.js";
import dislikeSrc from "../../../../shared/asset/dislike_white.js";
import shareSrc from "../../../../shared/asset/share_white.js";
import settingSrc from "../../../../shared/asset/setting_white.js";
import arraySrc from "../../../../shared/asset/array_white.js";
import {
  Frame,
  Group,
  Video,
  Img,
  Title,
  TitleText,
  UserTitle,
  User,
  UserImg,
  UserText,
  Text,
  TextSmall,
  IconBorder,
  LikeBorder,
  LikeBox,
  DislikeBox,
  Like,
  Dislike,
  Icon,
  Introduce,
  CommentArray,
  TitleIconText,
  IconWrap,
} from "./style.js";
const Detail = () => {
  const [detailList, loading, error] = useDetailData();
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <Frame>
      <Group>
        <Video>
          <Img src={detailList.thumbImg} alt="Thumbnail" />
          <Title>
            <TitleText>{detailList.title}</TitleText>
            <UserTitle>
              <User>
                <UserImg src={detailList.userImg} alt="User" />
                <UserText>
                  <Text>{detailList.userName}</Text>
                  <TextSmall>{`구독자 ${setNumber(
                    detailList.subscriber
                  )}명`}</TextSmall>
                </UserText>
              </User>
              <IconBorder>
                <IconWrap>
                  <Icon as={alertSrc} alt="Alert Icon" />
                </IconWrap>

                <TitleIconText>구독중</TitleIconText>
                <IconWrap>
                  <Icon as={arrowSrc} alt="Alert Icon" />
                </IconWrap>
              </IconBorder>

              <LikeBorder>
                <LikeBox>
                  <Like>
                    <IconWrap>
                      <Icon as={likeSrc} alt="Alert Icon" />
                    </IconWrap>
                    <TitleIconText>{`${setNumber(
                      detailList.like
                    )}`}</TitleIconText>
                  </Like>
                </LikeBox>
                <DislikeBox>
                  <Dislike>
                    <IconWrap>
                      <Icon as={dislikeSrc} alt="Alert Icon" />
                    </IconWrap>
                  </Dislike>
                </DislikeBox>
              </LikeBorder>

              <IconBorder>
                <IconWrap>
                  <Icon as={shareSrc} alt="Alert Icon" />
                </IconWrap>
                <TitleIconText>공유</TitleIconText>
              </IconBorder>

              <IconBorder>
                <IconWrap>
                  <Icon as={settingSrc} alt="Alert Icon" />
                </IconWrap>
              </IconBorder>
            </UserTitle>
          </Title>
        </Video>
        <Introduce>
          {`조회수 ${setNumber(detailList.view)}회 ${setDate(
            detailList.date
          )} ${detailList.content}`}
        </Introduce>
        <div>
          <p>{`댓글 ${setNumber(detailList.comment)}개`}</p>
          <CommentArray>
            <div style={{ backgroundImage: `url(${arraySrc})` }}></div>
            <p>정렬 기준</p>
          </CommentArray>
          <DetailComment user_img={detailList.userImg} />
        </div>
      </Group>
    </Frame>
  );
};

export default Detail;
