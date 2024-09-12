import Shorts from "./shorts";
import Home from "./home";
import Detail from "./detail";
import Aside from "../widget/aside";
import React from "react";
import ExceptPage from "./except";
import { Routes, Route, useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  const pageChangeEvent = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };
  return (
    <>
      <Aside onPageClick={pageChangeEvent} />
      <Routes>
        <Route path="/" element={<Home onPageClick={pageChangeEvent} />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/subscribe" element={<ExceptPage />} />
        <Route path="/youtubeMusic" element={<ExceptPage />} />
        <Route path="/myVideo" element={<ExceptPage />} />
        <Route path="/offline" element={<ExceptPage />} />
      </Routes>
    </>
  );
};
export default Page;
