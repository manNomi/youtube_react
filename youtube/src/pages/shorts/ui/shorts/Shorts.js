import ShortsVideo from "../shortsVideo/ShortsVideo.js";
import useShortsData from "../../../../entities/shortsData/useShortsData.js";
import Loading from "../../../../shared/loading/Loading.js";
import { Root } from "./style.js"; // 새로 정의한 스타일 임포트

const Shorts = () => {
  const [shortsList, loading, error] = useShortsData();
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <Root>
      {shortsList.length > 0 ? (
        shortsList.map((shortsData) => <ShortsVideo shortsData={shortsData} />)
      ) : (
        <div>데이터가 없습니다</div>
      )}
    </Root>
  );
};

export default Shorts;
