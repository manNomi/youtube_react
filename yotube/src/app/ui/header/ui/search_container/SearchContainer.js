import React from "react";
import {
  Container,
  Box,
  Hidden,
  Outline,
  Input,
  Btn,
  BtnImg,
} from "./style.js";
import HoverIcon from "../hover_icon/HoverIcon";
import searchIcon from "../../asset/search.svg";
import searchIconWhite from "../../asset/search_white.svg";
import micIcon from "../../asset/mic.svg";
import micIconWhite from "../../asset/mic_white.svg";
import { useDarkMode } from "../../../../model/useDarkModeState/useDarkModeState.js";
const SearchContainer = () => {
  const { darkModeState } = useDarkMode();
  return (
    <Container>
      {/* 검색 박스 */}
      <Outline>
        <Box>
          <Input className="input" placeholder="검색" />
        </Box>
        <Hidden
          style={{
            backgroundImage: `url(${
              darkModeState ? searchIconWhite : searchIcon
            })`,
          }}
        />
      </Outline>

      {/* 검색 버튼 */}
      <Btn>
        <BtnImg
          style={{
            backgroundImage: `url(${
              darkModeState ? searchIconWhite : searchIcon
            })`,
          }}
        />
      </Btn>

      {/* 마이크 아이콘 */}
      <HoverIcon resource={darkModeState ? micIconWhite : micIcon} />
    </Container>
  );
};

export default SearchContainer;
