import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePage } from "../../../shared/reudx/action/pageAction";
import { useScrollDenied } from "./scrollDenied";

export const useNavigateEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useSelector((store) => store.page);
  let bool = false;
  const pageType = page.split("?");
  if ((pageType == null && page === "shorts") || pageType[0] === "shorts") {
    bool = true;
  }
  useScrollDenied(bool);

  const pageChangeEvent = (page, obj) => {
    if (obj != null) {
      dispatch(changePage(`${page}?${obj.id}`));
    } else {
      dispatch(changePage(`${page}`));
    }
  };
  useEffect(() => {
    navigate(`${page.toLowerCase()}`);
    // ${  searchParams.toString() ? `?${searchParams.toString()}` : ""}
  }, [page, navigate]);

  // useEffect 하나만 빈배열 넣으면 렌더링 될때 한번만 실행
  // 의존성 배열에 넣었다 ? 상태가 변경될떄 마다 변경

  return { pageChangeEvent };
};
