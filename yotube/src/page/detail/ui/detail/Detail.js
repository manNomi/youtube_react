import useDetailData from "../../../../entities/useDetailData/useDetailData.js";
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
                <Icon src={alertSrc} alt="Alert Icon" />
                <TitleIconText>구독중</TitleIconText>
                <Icon src={arrowSrc} alt="Arrow Icon" />
              </IconBorder>

              <LikeBorder>
                <LikeBox>
                  <Like>
                    <Icon src={likeSrc} alt="Like Icon" />
                    <TitleIconText>{`${setNumber(
                      detailList.like
                    )}`}</TitleIconText>
                  </Like>
                </LikeBox>
                <DislikeBox>
                  <Dislike>
                    <Icon src={dislikeSrc} alt="Dislike Icon" />
                  </Dislike>
                </DislikeBox>
              </LikeBorder>

              <IconBorder>
                <Icon src={shareSrc} alt="Share Icon" />
                <TitleIconText>공유</TitleIconText>
              </IconBorder>

              <IconBorder>
                <Icon src={settingSrc} alt="Setting Icon" />
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
