import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  flex: 0 1 ${({ theme }) => theme.sizes.searchSize};

  @media (min-width: 500px) {
    display: flex;
  }
`;

export const Box = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  display: flex;
  align-items: center;
`;

export const Hidden = styled.div`
  width: ${({ theme }) => theme.sizes.logoSizeSmall};
  height: 0;
`;

export const Outline = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border: none;

  ${Container}:focus-within & {
    border: 1px solid ${({ theme }) => theme.colors.focusBlue};
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
  ${Container}:focus-within ${Box} {
    border: none;
  }
  ${Container}:focus-within ${Hidden} {
    height: ${({ theme }) => theme.sizes.logoSizeSmall};
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 80%;
  height: 80%;
  line-height: 100%;
  outline: none;
  border: none;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.transparent};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const Btn = styled.button`
  width: 64px;
  height: 80%;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BtnImg = styled.div`
  width: ${({ theme }) => theme.sizes.logoSizeSmall};
  height: ${({ theme }) => theme.sizes.logoSizeSmall};
`;
