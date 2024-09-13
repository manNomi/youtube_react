import styled from "styled-components";

export const Group = styled.article`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1 1 300px;
  max-width: 500px;
  min-width: 0px;
  padding: 5px;
  cursor: pointer;
`;

export const Img = styled.img`
  border-radius: 15px;
  padding: 5px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const UserImg = styled.img`
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 50%;
`;

export const Text = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const TextName = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const TextSmall = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: var(--color-thumb-text-small);
`;

export const TextSmallBox = styled.div`
  display: flex;
`;
