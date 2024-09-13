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

  @media (min-width: 790px) {
    margin-left: var(--aside-size);
  }
`;
