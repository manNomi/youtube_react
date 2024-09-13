import styled from "styled-components";

export const Group = styled.article`
  display: flex;
  width: var(--shorts-width);
  height: var(--shorts-height);
  flex-direction: column;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
`;

export const Video = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Img = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 100%;
`;

export const VideoIconList = styled.div`
  position: absolute;
  display: flex;
  top: 5%;
`;

export const VideoIcon = styled.img`
  opacity: 0.3;
  cursor: pointer;
  margin: 5px;
  width: var(--shorts-icon-big-width);
  height: var(--shorts-icon-big-height);
  background-color: var(--color-white);
  border-radius: 50%;

  &:hover {
    opacity: 0.7;
  }
`;

export const UserImg = styled.img`
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 50%;
`;

export const SubscribeIcon = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 15px;
  background-color: white !important;
  color: black !important;
  text-align: center;
  line-height: 25px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80%;
  margin: 10px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: white !important;
  margin: 3px;
`;

export const IconBox = styled.div`
  width: var(--shorts-aside-width);
  height: var(--shorts-aside-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 50px;
  height: 100%;
`;

export const Icon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  width: var(--shorts-icon-width);
  height: var(--shorts-icon-height);
  border-radius: 50%;
  margin: 1px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const IconBorder = styled.div`
  width: var(--shorts-icon-big-width);
  height: var(--shorts-icon-big-height);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: var(--color-hover);
  }
`;

export const TextIconList = styled.p`
  color: white;
`;
