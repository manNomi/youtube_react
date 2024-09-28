// Event함수에서 Reduycer한테 전달할 명령어 목록
// 이 명령어 목록은 우리가 정한다
// Action에 선언되지 않은 명령은 Reducer에 전달할 수 없다

// EX) 페이지 수정 명령 / 페이지 초기화 명령

export const changePage = (pageName) => {
  const action = {
    type: "CHANGE_PAGE",
    page_name: pageName,
  };
  return action;
};
// 명령어를 만들어서 반환한다

export const resetPage = () => {
  const aciton = {
    type: "RESET_PAGE",
  };
  return aciton;
};
// export const resetPage = () => {
//     return { type: "RESET_PAGE" }
//   };
