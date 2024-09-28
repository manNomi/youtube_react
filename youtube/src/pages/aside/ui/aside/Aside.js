import iconData from "../../consts/asideData.js";
import AsideIcon from "../aside_element/AsideElement.js";
import { AsideTag } from "./style.js";
import { useTheme } from "styled-components";
import { useNavigateEvent } from "../../../page/model/usePageChange.js";
const Aside = () => {
  const theme = useTheme();
  const { pageChangeEvent } = useNavigateEvent();
  return (
    <AsideTag>
      {iconData.map((icon) => (
        <AsideIcon
          content={icon.text}
          resource={theme.icons[icon.img]}
          onClick={() => {
            pageChangeEvent(icon.type);
          }}
        />
      ))}
    </AsideTag>
  );
};
export default Aside;
