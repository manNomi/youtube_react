import styled from "styled-components";

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.text};
  @media (min-width: ${({ theme }) => theme.sizes.windowSmallSize}) {
    margin-left: ${({ theme }) => theme.sizes.asideSize};
  }
`;
