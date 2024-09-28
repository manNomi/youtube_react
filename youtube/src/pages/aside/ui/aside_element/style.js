import styled from "styled-components";

export const IconButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.x};
  cursor: pointer;
  width: 100%;
  height: 64px;
  border-radius: 3px;
  margin: 1px;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const SvgIcon = styled.svg`
  width: 30px;
  height: 30px;
`;

export const SvgIconWrap = styled.div`
  width: 30px;
  height: 30px;
`;

export const IconText = styled.p`
  font-size: 11px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
