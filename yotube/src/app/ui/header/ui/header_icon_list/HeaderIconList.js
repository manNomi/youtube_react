import HoverIcon from "../hover_icon/HoverIcon";
import cameraIcon from "../../asset/camera.svg";
import cameraIconWhite from "../../asset/camera_white.svg";
import alertIcon from "../../asset/alert.svg";
import alertIconWhite from "../../asset/alert_white.svg";

import { useDarkMode } from "../../../../model/useDarkModeState/useDarkModeState";
import { Nav, Checkbox } from "./style";

const HeaderIconList = () => {
  const { darkModeState, darkModeClick } = useDarkMode();

  return (
    <Nav>
      <HoverIcon resource={darkModeState ? cameraIconWhite : cameraIcon} />
      <HoverIcon resource={darkModeState ? alertIconWhite : alertIcon} />
      <HoverIcon resource={darkModeState ? alertIconWhite : alertIcon} />
      <Checkbox role="switch" onClick={darkModeClick} />
    </Nav>
  );
};

export default HeaderIconList;
