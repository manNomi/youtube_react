import iconData from "../../consts/asideData.js";
import AsideIcon from "../aside_element/AsideElement.js";
import { AsideTag } from "../aside/style.js";
import { useDarkMode } from "../../../../app/model/useDarkModeState/useDarkModeState.js";
const Aside = (props) => {
  const { darkModeState } = useDarkMode();

  return (
    <AsideTag>
      {iconData.map((icon) => (
        <AsideIcon
          content={icon.content}
          resource={darkModeState ? icon.resourceWhite : icon.resource}
          onClick={() => {
            props.onPageClick(icon.type);
          }}
        />
      ))}
    </AsideTag>
  );
};

export default Aside;
