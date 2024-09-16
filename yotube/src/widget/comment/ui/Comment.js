import {
  Container,
  UserBox,
  UserImgBox,
  UserImg,
  Box,
  UserText,
  TextBold,
  Text,
  Content,
  IconBox,
  Icon,
  IconText,
  SettingBox,
  SettingIcon,
} from "./style.js";
import { setDate, setNumber } from "../../../shared/setNumber/setNumber.js";

const Comment = (props) => {
  const { userImg, content, userName, like, dislike, date } = props;

  return (
    <Container>
      <UserBox>
        <UserImgBox>
          <UserImg src={userImg} />
        </UserImgBox>
        <Box>
          <UserText>
            <TextBold>{userName}</TextBold>
            <Text>{setDate(date)}</Text>
          </UserText>
          <Content>{content}</Content>
          <IconBox>
            <Icon
              style={{
                backgroundImage: `url(./image/common/like.svg)`,
              }}></Icon>
            <Text>{setNumber(like)}</Text>
            <Icon
              style={{
                backgroundImage: `url(./image/common/dislike.svg)`,
              }}></Icon>
            <IconText>답글</IconText>
          </IconBox>
        </Box>
      </UserBox>
      <SettingBox>
        <SettingIcon
          style={{
            backgroundImage: `url(./image/common/setting.svg)`,
          }}></SettingIcon>
      </SettingBox>
    </Container>
  );
};

export default Comment;
