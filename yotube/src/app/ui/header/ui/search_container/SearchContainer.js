import css from "./SearchContainer.module.css";
import HoverIcon from "../hover_icon/HoverIcon.js";

import searchIcon from "../../asset/search.svg";
import micIcon from "../../asset/mic.svg";
const SearchContainer = () => {
  return (
    <div className={css.container}>
      {/* 검색 박스 */}
      <div className={css.outline}>
        <div className={css.box}>
          <input className={css.input} placeholder="검색" />
        </div>
        <div
          className={`${css.hidden} svg`}
          style={{ backgroundImage: `url(${searchIcon})` }}
        />
      </div>

      {/* 검색 버튼 */}
      <button className={css.btn}>
        <div
          className={`${css.btn_img} svg`}
          style={{ backgroundImage: `url(${searchIcon})` }}
        />
      </button>

      {/* 마이크 아이콘 */}
      <HoverIcon resource={micIcon} />
    </div>
  );
};
export default SearchContainer;
