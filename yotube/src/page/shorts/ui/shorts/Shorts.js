import css from "./Shorts.module.css";
import ShortsVideo from "../shortsVideo/ShortsVideo.js";
import useShortsData from "../../model/useShortsData/useShortsData.js";
import Loading from "../../../../shared/loading/Loading.js";
const Shorts = () => {
  const [shortsList, loading, error] = useShortsData();

  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <main className={css.root}>
      {shortsList.length > 0 ? (
        shortsList.map((shortsData) => <ShortsVideo shortsData={shortsData} />)
      ) : (
        <div>데이터가 없습니다</div>
      )}
    </main>
  );
};
export default Shorts;
