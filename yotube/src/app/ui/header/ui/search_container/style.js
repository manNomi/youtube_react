import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  flex: 0 1 var(--search-size);

  /* 반응형 디자인 */
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
  border: 1px solid var(--color-placeHorder);
  display: flex;
  align-items: center;
`;

export const Hidden = styled.div`
  width: var(--logo-size-small);
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

  /* 포커스된 상태에서 스타일 적용 */
  ${Container}:focus-within & {
    border: 1px solid var(--color-focus-blue);
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
  ${Container}:focus-within ${Box} {
    border: none;
  }
  ${Container}:focus-within ${Hidden} {
    height: var(--logo-size-small);
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
  color: var(--color-black);
  background-color: var(--color-x);

  &::placeholder {
    color: var(--color-placeHorder);
  }
`;

export const Btn = styled.button`
  width: 64px;
  height: 80%;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border: 1px solid var(--color-placeHorder);
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BtnImg = styled.div`
  width: var(--logo-size-small);
  height: var(--logo-size-small);
`;
