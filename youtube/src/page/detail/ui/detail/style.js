import styled, { keyframes } from "styled-components";

const brightIcon = keyframes`
  from {
    background-color: ${({ theme }) => theme.colors.gray};
  }
  to {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Frame = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: ${({ theme }) => theme.sizes.windowSmallSize}) {
    margin-left: ${({ theme }) => theme.sizes.asideSize};
  }
`;

export const Group = styled.article`
  display: flex;
  width: 100%;
  max-width: 900px;
  height: 100%;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
`;

export const Video = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const TitleText = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: 3px;
`;

export const UserTitle = styled.div`
  display: flex;
  width: 100%;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const UserImg = styled.img`
  width: ${({ theme }) => theme.sizes.thumbSize};
  height: ${({ theme }) => theme.sizes.thumbSize};
  border-radius: 50%;
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

export const Text = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin: 3px;
`;

export const TextSmall = styled.p`
  font-size: small;
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconBorder = styled.button`
  width: auto;
  height: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  color: white !important;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-right: 10px;

  &:hover {
    animation: ${brightIcon} 0.5s forwards;
  }
`;

export const LikeBorder = styled.button`
  display: flex;
`;

export const LikeBox = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: end;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: ${({ theme }) => theme.colors.gray};
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    animation: ${brightIcon} 0.5s forwards;
  }
`;

export const DislikeBox = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${({ theme }) => theme.colors.gray};
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 5px;

  &:hover {
    animation: ${brightIcon} 0.5s forwards;
  }
`;

export const Like = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-right: solid 1px white;
  background-color: ${({ theme }) => theme.colors.transparent} !important;
`;

export const Dislike = styled.div`
  background-color: ${({ theme }) => theme.colors.transparent} !important;
`;

export const Icon = styled.svg``;
export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  width: ${({ theme }) => theme.sizes.detailIconWidth};
  height: ${({ theme }) => theme.sizes.detailIconHeight};
  border-radius: 50%;
  margin: 1px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Introduce = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
  color: white !important;
  white-space: pre-line;
`;

export const CommentArray = styled.div`
  display: flex;
  margin: 5px;
`;

export const TitleIconText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
