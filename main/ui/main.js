const Main = () => {
  const [pageState, useMainState] = useMainState();
  return (
    <>
      <Aside onPageClick={pageChangeEvent} />
      {pageState == "Home" && <Home onPageClick={pageChangeEvent} />}
      {pageState == "Shorts" && <Shorts />}
      {pageState == "Detail" && <Detail />}
    </>
  );
};
