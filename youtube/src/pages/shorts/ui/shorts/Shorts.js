import React, { useState, useEffect, useRef, useCallback } from "react";
import ShortsVideo from "../shortsVideo/ShortsVideo.js";
import useShortsData from "../../../../entities/shortsData/useShortsData.js";
import Loading from "../../../../shared/loading/Loading.js";
import { Root } from "./style.js";
import { useScrollDetection } from "../../model/useShortsPage.js";
import { useSearchParams } from "react-router-dom";
const Shorts = () => {
  const [page, setPage] = useState(0);
  const [shortsData, loading, error] = useShortsData(page);
  const [, setSearchParams] = useSearchParams();
  const videoRefs = useRef({});
  useScrollDetection(() => {
    setPage((prevPage) => prevPage + 1);
  });
  useEffect(() => {
    setSearchParams({ id: page });
  }, [page]);
  return loading ? (
    <Loading />
  ) : error ? (
    <div>에러</div>
  ) : (
    <Root>
      <ShortsVideo
        shortsData={shortsData}
        key={page}
        ref={(el) => (videoRefs.current[page] = el)}
      />
    </Root>
  );
};

export default Shorts;
