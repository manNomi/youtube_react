import { IconButton, SvgIcon, IconText } from "./style.js";
const AsideIcon = (props) => {
  return (
    <IconButton onClick={props.onClick}>
      <SvgIcon style={{ backgroundImage: `url(${props.resource.default})` }} />
      {props.content && <IconText>{props.content}</IconText>}
    </IconButton>
  );
};

export default AsideIcon;
