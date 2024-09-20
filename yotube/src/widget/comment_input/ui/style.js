import styled from "styled-components";

export const Write = styled.div`
  display: flex;
`;

export const WriteInput = styled.input`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.text};

  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  margin-left: 5px;
  outline: none;
  transition: border-bottom-color 1s ease;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.focusBlue};
  }
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
