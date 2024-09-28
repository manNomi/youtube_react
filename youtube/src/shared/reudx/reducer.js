// Redux의 Dispatcher 코드가 들어올 파일
// 여기 안에서 모든 State의 수정 Logic이 적힐 예정

import { createStore } from "redux";

const initState = {
  page: "/",
  theme_dark: false,
  comment_visible: false,
};
const reducer = (store = initState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...store,
        page: action.page_name,
      };
    case "CHANGE_THEME":
      return {
        ...store,
        theme_dark: action.theme_dark,
      };
    case "CHANGE_COMMENT":
      return {
        ...store,
        comment_visible: action.comment_visible,
      };
    case "RESET_PAGE":
      return { ...store, page: "/" };
    case "RESET_THEME":
      return { ...store, theme_dark: false };
    case "RESET_COMMENT":
      return { ...store, comment_visible: false };
    default:
      return store;
  }
};
const store = createStore(reducer);
export default store;
