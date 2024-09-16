import iconData from "../../consts/asideData.js";
import AsideIcon from "../aside_element/AsideElement.js";
import { AsideTag } from "../aside/style.js";
const Aside = (props) => {
  return (
    <AsideTag>
      {iconData.map((icon) => (
        <AsideIcon
          content={icon.content}
          resource={icon.resource}
          onClick={() => {
            props.onPageClick(icon.type);
          }}
        />
      ))}
    </AsideTag>
  );
};

export default Aside;
