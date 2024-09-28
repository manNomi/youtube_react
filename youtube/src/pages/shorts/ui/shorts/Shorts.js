import ShortsVideo from "../shortsVideo/ShortsVideo.js";
import useShortsData from "../../../../entities/shortsData/useShortsData.js";

import Loading from "../../../../shared/loading/Loading.js";
import { Root } from "./style.js"; // 새로 정의한 스타일 임포트
import { useScrollDetection } from "../../model/useShortsPage.js";
import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
const Shorts = () => {
  const [page, setPage] = useState(1);
  const [shortsData, loading, error] = useShortsData(page);
  const [shortsVideoList, setShortsVideoList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useScrollDetection(() => {
    setPage((page) => page + 1);
    setSearchParams({ id: page });
  });

  useEffect(() => {
    setShortsVideoList((shortsVideo) => [
      ...shortsVideo,
      <ShortsVideo shortsData={shortsData} key={page} />,
    ]);
  }, [page, shortsData]);

  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <Root>{shortsVideoList}</Root> // 상태로 관리하는 리스트를 렌더링합니다.
  );
};

export default Shorts;

// const Shorts = () => {
//   const ShortsVideoList = [];
//   const [page, setPage] = useState(1);
//   const [shortsData, loading, error] = useShortsData(page);
//   const scrollY = useScrollDetection;
//   scrollY(() => {
//     setPage(page + 1);
//     ShortsVideoList.push(ShotsVideo);
//     const ShotsVideo = <ShortsVideo shortsData={shortsData} />;
//     console.log(page);
//   });

//   return loading ? (
//     <Loading />
//   ) : error ? (
//     <div>에러</div>
//   ) : (
//         <Root>
//           {ShortsVideoList.map}
//       <ShortsVideo shortsData={shortsData} />: <div>데이터가 없습니다</div>
//     </Root>
//   );
// };

// export default Shorts;
