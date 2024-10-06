import React from "react";
import { useSearchParams } from "react-router-dom";

const getShortsData = (id) => {
  const Shorts = {
    shorts_index: id,
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
    thumbImg: "./asset/shorts_img.jpeg",
    userImg: "./asset/user_img.jpg",
    userName: "올끌 (All of MBClassic)",
    like: 441231,
    dislike: 124,
    comment: id,
  };
  return Shorts;
};

const useShortsData = (id) => {
  const [shortsList, setShortsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const shortData = getShortsData(id);
        setShortsList(shortData);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [id]);
  return [shortsList, loading, error];
};

export default useShortsData;
