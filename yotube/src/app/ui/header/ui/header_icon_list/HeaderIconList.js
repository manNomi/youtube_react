import css from "./HeaderIconList.module.css";
import HoverIcon from "../hover_icon/HoverIcon";
import cameraIcon from "../../asset/camera.svg";
import alertIcon from "../../asset/alert.svg";

// import setDark from "../../darkmodeEvent/darkMode.js";
const HeaderIconList = () => {
  return (
    <nav className={css.root}>
      <HoverIcon resource={cameraIcon} />
      <HoverIcon resource={alertIcon} />
      <HoverIcon resource={alertIcon} />
      {/* <input role="switch" type="checkbox" onChange={setDark} />; */}
      <input role="switch" type="checkbox" />;
    </nav>
  );
};
export default HeaderIconList;
