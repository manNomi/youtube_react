import React from "react";
import {
  Container,
  Box,
  Hidden,
  Outline,
  Input,
  Btn,
  BtnImg,
  Icon,
} from "./style.js";
import HoverIcon from "../hover_icon/HoverIcon";
import { useTheme } from "styled-components";
const SearchContainer = () => {
  const theme = useTheme();
  return (
    <Container>
      {/* 검색 박스 */}
      <Outline>
        <Box>
          <Input className="input" placeholder="검색" />
        </Box>
        <Hidden>
          <Icon as={theme.icons.search} />
        </Hidden>
      </Outline>

      {/* 검색 버튼 */}
      <Btn>
        <BtnImg>
          <Icon as={theme.icons.search} />
        </BtnImg>
      </Btn>

      {/* 마이크 아이콘 */}
      <HoverIcon resource={theme.icons.mic} />
    </Container>
  );
};

export default SearchContainer;
