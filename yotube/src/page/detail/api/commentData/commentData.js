const getCommentData = () => {
  const index = 15;
  const content = {
    userImg: "./image/main/user_img.jpg",
    userName: "괴루무루쥐",
    content: "내용이 이쓸까요 업쓸까요 ? ",
    like: 441231,
    dislike: 124,
    date: 123123,
  };
  const contentList = [];
  for (let i = 0; i < index; i++) {
    contentList.push(content);
  }
  return contentList;
};

export default getCommentData;
