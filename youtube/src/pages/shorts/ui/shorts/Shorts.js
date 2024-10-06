import ShortsVideo from "../shortsVideo/ShortsVideo.js";
import useShortsData from "../../../../entities/shortsData/useShortsData.js";
import Loading from "../../../../shared/loading/Loading.js";
import { Root } from "./style.js"; // 새로 정의한 스타일 임포트
import { useScrollEvent } from "../../model/useScollEvent.js.js";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const Shorts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    setSearchParams({ id: 123 });
  }, []);
  const [shortsList, loading, error] = useShortsData(id);
  useScrollEvent(shortsList);
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <Root>
      <ShortsVideo shortsData={shortsList} />
    </Root>
  );
};

export default Shorts;
