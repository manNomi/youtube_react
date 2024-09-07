import iconData from "../../consts/asideData.js";
import AsideIcon from "../aside_element/AsideElement.js";
import css from "./Aside.module.css";
const Aside = (props) => {
  return (
    <aside className={css.root}>
      {iconData.map((icon) => (
        <AsideIcon
          content={icon.content}
          resource={icon.resource}
          onClick={() => {
            props.onPageClick(icon.type);
          }}
        />
      ))}
    </aside>
  );
};

export default Aside;
