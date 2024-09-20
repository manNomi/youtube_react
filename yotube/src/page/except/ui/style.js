import styled from "styled-components";

export const NotWork = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  @media (min-width: ${({ theme }) => theme.sizes.windowSmallSize}) {
    margin-left: ${({ theme }) => theme.sizes.asideSize};
  }

  justify-content: center;
  align-items: center;
`;
