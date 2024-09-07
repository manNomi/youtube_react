import Shorts from "./shorts";
import Home from "./home";
import Detail from "./detail";
import Aside from "../widget/aside";
import React from "react";

const useMainState = () => {
  const [pageState, setPageState] = React.useState("Home");
  const pageChangeEvent = (page) => {
    setPageState(page);
  };
  return [pageState, pageChangeEvent];
};

const Page = () => {
  const [pageState, pageChangeEvent] = useMainState();
  return (
    <>
      <Aside onPageClick={pageChangeEvent} />
      {pageState === "Home" && <Home onPageClick={pageChangeEvent} />}
      {pageState === "Shorts" && <Shorts />}
      {pageState === "Detail" && <Detail />}
    </>
  );
};
export default Page;
