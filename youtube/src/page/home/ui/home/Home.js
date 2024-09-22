import Video from "../video/Video.js";
import useHomeData from "../../../../entities/homeData/useHomeData.js";
import Loading from "../../../../shared/loading/Loading.js";
import { Root } from "./style.js"; // 새로 정의한 스타일 임포트

const Home = (props) => {
  const [loading, error, videoList] = useHomeData();
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <Root>
      {videoList.map((videoData) => (
        <Video
          key={videoData.id}
          videoData={videoData}
          onPageClick={props.onPageClick}
        />
      ))}
    </Root>
  );
};

export default Home;
