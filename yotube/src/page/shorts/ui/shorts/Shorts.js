import css from "./Shorts.module.css";
import ShortsVideo from "../shortsVideo/ShortsVideo.js";
import useShortsData from "../../model/useShortsData/useShortsData.js";
const Shorts = () => {
  const {
    shortsList,
    loading: shortsLoading,
    error: shortsError,
  } = useShortsData();

  return shortsLoading ? (
    <div>로딩중</div>
  ) : shortsError ? (
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
