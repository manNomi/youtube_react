import styled from "styled-components";

export const AsideTag = styled.aside`
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.asideSize};
  position: fixed;
  height: 100%;
  color: ${({ theme }) => theme.colors.asideTextColor};
  margin-top: ${({ theme }) => theme.sizes.headerSize};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  font-size: 13px;
  text-align: center;
  top: 0;
`;
