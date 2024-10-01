import styled from "styled-components";

export const Group = styled.article`
  display: flex;
  width: ${({ theme }) => theme.sizes.shortsWidth};
  height: ${({ theme }) => theme.sizes.shortsHeight};
  flex-direction: column;
  cursor: pointer;
  position: relative;
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

export const VideoIcon = styled.div`
  opacity: 0.3;
  cursor: pointer;
  margin: 5px;
  width: ${({ theme }) => theme.sizes.shortsIconBigWidth};
  height: ${({ theme }) => theme.sizes.shortsIconBigHeight};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  &:hover {
    opacity: 0.7;
  }
`;
export const VideoTag = styled.div``;

export const UserImg = styled.img`
  width: ${({ theme }) => theme.sizes.thumbSize};
  height: ${({ theme }) => theme.sizes.thumbSize};
  border-radius: 50%;
`;

export const SubscribeIcon = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
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
  color: ${({ theme }) => theme.colors.white};
  margin: 3px;
`;

export const IconBox = styled.div`
  width: ${({ theme }) => theme.sizes.shortsAsideWidth};
  height: ${({ theme }) => theme.sizes.shortsAsideHeight};
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

export const Icon = styled.svg``;
export const IconWrap = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  width: ${({ theme }) => theme.sizes.shortsIconWidth};
  height: ${({ theme }) => theme.sizes.shortsIconHeight};
  border-radius: 50%;
  margin: 1px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.$src});
`;

export const IconBorder = styled.div`
  width: ${({ theme }) => theme.sizes.shortsIconBigWidth};
  height: ${({ theme }) => theme.sizes.shortsIconBigHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const TextIconList = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
