import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePage } from "../../../shared/reudx/action/pageAction";

export const useNavigateEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useSelector((store) => store.page);

  const pageChangeEvent = (page) => {
    dispatch(changePage(page));
  };

  useEffect(() => {
    navigate(`${page.toLowerCase()}`);
  }, [page, navigate]);
  // useEffect 하나만 빈배열 넣으면 렌더링 될때 한번만 실행
  // 의존성 배열에 넣었다 ? 상태가 변경될떄 마다 변경

  return { pageChangeEvent };
};
