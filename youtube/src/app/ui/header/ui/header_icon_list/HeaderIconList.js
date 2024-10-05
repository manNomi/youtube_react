import HoverIcon from "../hover_icon/HoverIcon";
import { Nav, Checkbox } from "./style";
import { useTheme } from "styled-components";
import { useThemeChangeEvent } from "../../../../model/useTheme";
import useDarkAtom from "../../../../../shared/recoil/useDarkAtom";
const HeaderIconList = () => {
  const theme = useTheme();
  const [theme_dark] = useDarkAtom();
  const themeChangeEvent = useThemeChangeEvent(!theme_dark);
  return (
    <Nav>
      <HoverIcon resource={theme.icons.camera} />
      <HoverIcon resource={theme.icons.alert} />
      <HoverIcon resource={theme.icons.alert} />
      <Checkbox
        checked={theme_dark}
        role="switch"
        onClick={() => {
          themeChangeEvent();
        }}
      />
    </Nav>
  );
};

export default HeaderIconList;
