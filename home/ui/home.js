const Home = (props) => {
  const [videoList, setVideoList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = getData();
        setVideoList(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  // 안되는 코드
  if (loading) {
    return <div>로딩중</div>;
  }
  if (error) {
    return <div>오류 입니다</div>;
  }

  return (
    <main
      className="main"
      onClick={() => {
        props.onPageClick("Detail");
      }}>
      {videoList.map((videoData) => (
        <Video {...videoData} />
      ))}
    </main>
  );
};

const getData = () => {
  const thumb_index = 15;
  const Video = {
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
    thumbImg: "https://img.youtube.com/vi/iFs8AfODM74/mqdefault.jpg",
    userImg: "./image/main/user_img.jpg",
    userName: "올끌 (All of MBClassic)",
    thumbView: 441231,
    thumbDate: 124,
  };
  const videoList = [];
  for (let i = 0; i < thumb_index; i++) {
    videoList.push(Video);
  }
  return videoList;
};
