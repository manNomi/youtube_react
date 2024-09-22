import HoverIcon from "../hover_icon/HoverIcon";
import { useDarkMode } from "../../../../model/useDarkModeState/useDarkModeState";
import { Nav, Checkbox } from "./style";

import { useTheme } from "styled-components";
const HeaderIconList = () => {
  const { darkModeClick } = useDarkMode();
  const theme = useTheme();
  return (
    <Nav>
      <HoverIcon resource={theme.icons.camera} />
      <HoverIcon resource={theme.icons.alert} />
      <HoverIcon resource={theme.icons.alert} />
      <Checkbox role="switch" onClick={darkModeClick} />
    </Nav>
  );
};

export default HeaderIconList;
