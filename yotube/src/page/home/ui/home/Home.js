import css from "./Home.module.css";
import Video from "../video/Video.js";
import useHomeData from "../../model/useHomeData/useHomeData.js";
const Home = (props) => {
  const [loading, error, videoList] = useHomeData();
  return loading ? (
    <div>로딩중</div>
  ) : error ? (
    <div>에러</div>
  ) : (
    <main
      className={css.root}
      onClick={() => {
        props.onPageClick("Detail");
      }}>
      {videoList.map((videoData) => (
        <Video {...videoData} />
      ))}
    </main>
  );
};
export default Home;
