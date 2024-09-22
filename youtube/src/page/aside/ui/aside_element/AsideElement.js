import { IconButton, SvgIcon, IconText, SvgIconWrap } from "./style.js";
const AsideIcon = (props) => {
  return (
    <IconButton onClick={props.onClick}>
      <SvgIconWrap>
        <SvgIcon as={props.resource} />
      </SvgIconWrap>
      {props.content && <IconText>{props.content}</IconText>}
    </IconButton>
  );
};

export default AsideIcon;
