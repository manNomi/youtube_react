export const changePage = (pageName) => {
  const action = {
    type: "CHANGE_PAGE",
    page_name: pageName,
  };
  return action;
};

export const resetPage = () => {
  const aciton = {
    type: "RESET_PAGE",
  };
  return aciton;
};
