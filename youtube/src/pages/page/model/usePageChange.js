import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePageAtom from "../../../shared/recoil/usePageAtom.js";

export const useNavigateEvent = () => {
  const navigate = useNavigate();
  const [page, setPage] = usePageAtom();
  const pageChangeEvent = (page) => {
    setPage(page);
  };
  useEffect(() => {
    navigate(`${page.toLowerCase()}`);
  }, [page, navigate]);
  // useEffect 하나만 빈배열 넣으면 렌더링 될때 한번만 실행
  // 의존성 배열에 넣었다 ? 상태가 변경될떄 마다 변경

  return { pageChangeEvent };
};
