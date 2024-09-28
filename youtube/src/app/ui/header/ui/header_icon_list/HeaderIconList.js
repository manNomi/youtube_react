import HoverIcon from "../hover_icon/HoverIcon";
import { Nav, Checkbox } from "./style";
import { useTheme } from "styled-components";
import { useThemeChangeEvent } from "../../model/useTheme";
const HeaderIconList = () => {
  const theme = useTheme();
  const themeChangeEvent = useThemeChangeEvent();
  return (
    <Nav>
      <HoverIcon resource={theme.icons.camera} />
      <HoverIcon resource={theme.icons.alert} />
      <HoverIcon resource={theme.icons.alert} />
      <Checkbox
        role="switch"
        onClick={() => {
          themeChangeEvent();
        }}
      />
    </Nav>
  );
};

export default HeaderIconList;
