import iconData from "../../consts/asideData.js";
import AsideIcon from "../aside_element/AsideElement.js";
import { AsideTag } from "./style.js";
import { useTheme } from "styled-components";
import { useNavigateEvent } from "../../../page/model/usePageChange.js";
import { useMediaQuery } from "react-responsive";

const Aside = () => {
  const theme = useTheme();
  const { pageChangeEvent } = useNavigateEvent();
  const aside = useMediaQuery({
    query: "(min-width:790px) ",
  });
  console.log(aside);
  if (!aside) {
    return;
  }
  return (
    <AsideTag>
      {iconData.map((icon) => (
        <AsideIcon
          content={icon.text}
          resource={theme.icons[icon.img]}
          onClick={() => {
            icon.type === "shorts"
              ? pageChangeEvent(icon.type, { id: 123 })
              : pageChangeEvent(icon.type);
          }}
        />
      ))}
    </AsideTag>
  );
};
export default Aside;
