import styled from "styled-components";

export const CommentFrame = styled.dialog`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Content = styled.article`
  background-color: ${({ theme }) => theme.colors.shortsComment} !important;
  color: white !important;
  border-radius: 15px;
  width: 450px;
  height: 600px;
`;

export const CommentNav = styled.nav`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  justify-content: space-around;
`;

export const CommentBox = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const CommentIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 10%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const CommentExit = styled.button`
  color: white !important;
  font-size: x-large;
  margin-left: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;
