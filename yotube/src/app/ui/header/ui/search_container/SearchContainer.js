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
import micIcon from "../../asset/mic.svg";

const SearchContainer = () => {
  return (
    <Container>
      {/* 검색 박스 */}
      <Outline>
        <Box>
          <Input className="input" placeholder="검색" />
        </Box>
        <Hidden style={{ backgroundImage: `url(${searchIcon})` }} />
      </Outline>

      {/* 검색 버튼 */}
      <Btn>
        <BtnImg style={{ backgroundImage: `url(${searchIcon})` }} />
      </Btn>

      {/* 마이크 아이콘 */}
      <HoverIcon resource={micIcon} />
    </Container>
  );
};

export default SearchContainer;
