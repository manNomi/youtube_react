import React from "react";

const getDetailData = () => {
  const detailData = {
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
    thumbImg: "/asset/play_img.png",
    userImg: "/asset/user_img.jpg",
    userName: "올끌 (All of MBClassic)",
    like: 441231,
    dislike: 124,
    comment: 123,
    view: 123123123,
    date: 1233,
    subscriber: 12312313,
    content: `▷치지직 생방송 - https://naver.me/IFIAjKrC
        ▶MONSRAT굿즈 - https://www.charonstore.com/
        ▷괴물쥐 공식 카페 - https://cafe.naver.com/tmxk9999`,
  };
  console.log(detailData);
  return detailData;
};

const useDetailData = () => {
  const [detailList, setDetailList] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const detailData = getDetailData();
        setDetailList(detailData);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return [detailList, loading, error];
};

export default useDetailData;
