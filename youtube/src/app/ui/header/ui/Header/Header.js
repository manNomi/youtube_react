import HoverIcon from "../hover_icon/HoverIcon.js";
import SearchContainer from "../search_container/SearchContainer.js";
import HeaderIconList from "../header_icon_list/HeaderIconList.js";

import { useTheme } from "styled-components";
import { HeaderContainer, LogoBox, LogoImg, LogoImgWrap } from "./style.js";
const Header = () => {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <LogoBox>
        <HoverIcon resource={theme.icons.setting} />
        <LogoImgWrap onClick={() => (window.location.href = "/")}>
          <LogoImg as={theme.icons.logo} />
        </LogoImgWrap>
      </LogoBox>
      <SearchContainer />
      <HeaderIconList />
    </HeaderContainer>
  );
};
export default Header;
