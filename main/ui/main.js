const Main = () => {
  const [pageState, setPageState] = React.useState("Home");
  const pageChangeEvent = (page) => {
    setPageState(page);
  };
  return (
    <>
      <Aside onPageClick={pageChangeEvent} />
      {pageState == "Home" && <Home onPageClick={pageChangeEvent} />}
      {pageState == "Shorts" && <Shorts />}
      {pageState == "Detail" && <Detail />}
    </>
  );
};
