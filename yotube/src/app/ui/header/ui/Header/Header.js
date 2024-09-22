import HoverIcon from "../hover_icon/HoverIcon.js";
import SearchContainer from "../search_container/SearchContainer.js";
import HeaderIconList from "../header_icon_list/HeaderIconList.js";
import settingIcon from "../../asset/setting.svg";
import settingIconWhite from "../../asset/setting_white.svg";
import logoIcon from "../../asset/logo.svg";
import logoIconWhite from "../../asset/logo_white.svg";
import { HeaderContainer, LogoBox, LogoImg } from "./style.js";
import { useDarkMode } from "../../../../model/useDarkModeState/useDarkModeState.js";
const Header = () => {
  const { darkModeState } = useDarkMode();
  return (
    <HeaderContainer>
      <LogoBox>
        <HoverIcon resource={darkModeState ? settingIconWhite : settingIcon} />
        <LogoImg
          src={darkModeState ? logoIconWhite : logoIcon}
          onClick={() => (window.location.href = "/")}
        />
      </LogoBox>
      <SearchContainer />
      <HeaderIconList />
    </HeaderContainer>
  );
};
export default Header;
