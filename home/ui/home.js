const Home = (props) => {
  const [loading, error, videoList] = useHomeData();
  return loading ? (
    <div>로딩중</div>
  ) : error ? (
    <div>에러</div>
  ) : (
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
