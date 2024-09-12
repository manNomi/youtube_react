import css from "./Home.module.css";
import Video from "../video/Video.js";
import useHomeData from "../../model/useHomeData/useHomeData.js";
import Loading from "../../../../shared/loading/Loading.js";
const Home = (props) => {
  const [loading, error, videoList] = useHomeData();
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <main className={css.root}>
      {videoList.map((videoData) => (
        <Video videoData={videoData} onPageClick={props.onPageClick} />
      ))}
    </main>
  );
};
export default Home;
