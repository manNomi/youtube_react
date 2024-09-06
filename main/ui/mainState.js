const useMainState = () => {
  const [pageState, setPageState] = React.useState("Home");
  const pageChangeEvent = (page) => {
    setPageState(page);
  };
  return [pageState, pageChangeEvent];
};
