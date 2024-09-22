import styled from "styled-components";

export const AsideTag = styled.aside`
  display: none;
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

  @media (min-width: 790px) {
    display: flex;
  }
`;
