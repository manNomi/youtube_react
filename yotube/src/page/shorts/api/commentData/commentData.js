const getShortsCommentData = () => {
  const index = 15;
  const contentList = [];
  for (let i = 0; i < index; i++) {
    const content = {
      comment_index: i,
      shorts_index: 3,
      userImg: "./image/main/user_img.jpg",
      userName: "괴루무루쥐",
      content: "내용이 이쓸까요 업쓸까요 ? ",
      like: 441231,
      dislike: 124,
      date: 123123,
    };
    contentList.push(content);
  }
  return contentList;
};

export default getShortsCommentData;
