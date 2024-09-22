import styled from "styled-components";

export const Nav = styled.nav`
  width: 200px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  position: relative;
  border: max(2px, 0.1em) solid ${({ theme }) => theme.colors.gray};
  border-radius: 1.25em;
  width: 2.25em;
  height: 1.25em;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: ${({ theme }) => theme.colors.gray};
    transition: left 250ms linear;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.black};
    border-color: ${({ theme }) => theme.colors.white};
  }

  &:checked::before {
    background-color: ${({ theme }) => theme.colors.white};
    left: 1em;
  }

  &:enabled:hover {
    box-shadow: 0 0 0 max(4px, 0.2em) ${({ theme }) => theme.colors.hover};
  }
`;
