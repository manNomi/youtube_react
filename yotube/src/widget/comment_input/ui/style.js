import styled from "styled-components";

export const Write = styled.div`
  display: flex;
`;

export const WriteInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  margin-left: 5px;
  outline: none;
  transition: border-bottom-color 1s ease;
  background-color: ${(props) => props.theme.colors.x};

  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.colors.focusBlue};
  }

  ${(props) =>
    props.colorDark &&
    `
    color: white !important;
  `}
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
