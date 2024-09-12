import HoverIcon from "../hover_icon/HoverIcon";
import cameraIcon from "../../asset/camera.svg";
import alertIcon from "../../asset/alert.svg";

import { Nav, Checkbox } from "./style";

const HeaderIconList = () => {
  return (
    <Nav>
      <HoverIcon resource={cameraIcon} />
      <HoverIcon resource={alertIcon} />
      <HoverIcon resource={alertIcon} />
      <Checkbox role="switch" />
    </Nav>
  );
};

export default HeaderIconList;
