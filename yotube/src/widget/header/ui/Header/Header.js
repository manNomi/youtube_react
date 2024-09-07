import css from "./Header.module.css";
import HoverIcon from "../hover_icon/HoverIcon.js";
import SearchContainer from "../search_container/SearchContainer.js";
import HeaderIconList from "../header_icon_list/HeaderIconList.js";
import IconData from "./Header";
const Header = () => {
  return (
    <header className={css.root}>
      <div className={css.logo_box}>
        <HoverIcon resource={IconData.settingSrc} />
        <div
          className={css.logo_img}
          style={{ backgroundImage: `url(${IconData.logoSrc})` }}
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
