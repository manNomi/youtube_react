import iconData from "../../consts/asideData.js";
import AsideIcon from "../aside_element/AsideElement.js";
import { AsideTag } from "../aside/style.js";
import { useTheme } from "styled-components";
const Aside = (props) => {
  const theme = useTheme();
  return (
    <AsideTag>
      {iconData.map((icon) => (
        <AsideIcon
          content={icon.text}
          resource={theme.icons[icon.img]}
          onClick={() => {
            props.onPageClick(icon.type);
          }}
        />
      ))}
    </AsideTag>
  );
};

export default Aside;
