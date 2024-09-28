import { setView, setDate } from "../../../../shared/setNumber/setNumber.js";
import {
  Group,
  Img,
  Title,
  UserImg,
  Text,
  TextName,
  TextSmall,
  TextSmallBox,
} from "./style.js"; // 새로 정의한 스타일 임포트
import { useNavigateEvent } from "../../../page/model/usePageChange.js";

const Video = (props) => {
  const { pageChangeEvent } = useNavigateEvent();
  const clickEvent = () => {
    pageChangeEvent("detail", { id: 456 });
  };
  return (
    <Group onClick={clickEvent}>
      <Img src={props.videoData.thumbImg} alt="" />
      <Title>
        <UserImg src={props.videoData.userImg} alt="" />
        <div>
          <Text>{props.videoData.title}</Text>
          <TextName>{props.videoData.userName}</TextName>
          <TextSmallBox>
            <TextSmall>{setView(props.videoData.thumbView)}</TextSmall>
            <TextSmall>•</TextSmall>
            <TextSmall>{setDate(props.videoData.thumbDate)}</TextSmall>
          </TextSmallBox>
        </div>
      </Title>
    </Group>
  );
};

export default Video;
