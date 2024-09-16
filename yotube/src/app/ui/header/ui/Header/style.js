import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  width: 100%;
  position: sticky;
  height: ${({ theme }) => theme.sizes.headerSize};
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  background-color: white;
`;

export const LogoBox = styled.div`
  left: 0;
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-shrink: 0;
  margin-left: 13px;
`;

export const LogoImg = styled.img`
  width: 97px;
  height: 20px;
  margin-left: 13px;
  cursor: pointer;
`;
