import css from "./Header.module.css";
import HoverIcon from "../hover_icon/HoverIcon.js";
import SearchContainer from "../search_container/SearchContainer.js";
import HeaderIconList from "../header_icon_list/HeaderIconList.js";
import settingIcon from "../../asset/setting.svg";
import logoIcon from "../../asset/logo.svg";
const Header = () => {
  return (
    <header className={css.root}>
      <div className={css.logo_box}>
        <HoverIcon resource={settingIcon} />
        <div
          className={css.logo_img}
          style={{ backgroundImage: `url(${logoIcon})` }}
          onClick={() => {
            window.location.reload();
          }}
        />
      </div>
      <SearchContainer />
      <HeaderIconList />
    </header>
  );
};
export default Header;
