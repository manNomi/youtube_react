import HoverIcon from "../hover_icon/HoverIcon.js";
import SearchContainer from "../search_container/SearchContainer.js";
import HeaderIconList from "../header_icon_list/HeaderIconList.js";
import settingIcon from "../../asset/setting.svg";
import logoIcon from "../../asset/logo.svg";
import { HeaderContainer, LogoBox, LogoImg } from "./style.js";
const Header = () => {
  return (
    <HeaderContainer>
      <LogoBox>
        <HoverIcon resource={settingIcon} />
        <LogoImg src={logoIcon} onClick={() => (window.location.href = "/")} />
      </LogoBox>
      <SearchContainer />
      <HeaderIconList />
    </HeaderContainer>
  );
};
export default Header;
