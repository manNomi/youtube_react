import styled, { keyframes } from "styled-components";

const brightText = keyframes`
  from {
      background-color: ${({ theme }) => theme.colors.transparent};
  }
  to {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    animation: ${brightText} 0.5s forwards;
  }
`;
