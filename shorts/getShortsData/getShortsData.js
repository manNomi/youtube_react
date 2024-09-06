const uetGetShortsData = () => {
  const [shortsList, setShortsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const shortData = getShortsData();
        setShortsList(shortData);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);
  return { shortsList, loading, error };
};

const getShortsData = () => {
  const thumb_index = 15;
  const shortsLists = [];
  for (let i = 0; i < thumb_index; i++) {
    const Shorts = {
      shorts_index: i,
      title:
        "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
      thumbImg: "./image/shorts/shorts_img.jpeg",
      userImg: "./image/main/user_img.jpg",
      userName: "올끌 (All of MBClassic)",
      like: 441231,
      dislike: 124,
      comment: 123,
    };
    shortsLists.push(Shorts);
  }
  return shortsLists;
};
