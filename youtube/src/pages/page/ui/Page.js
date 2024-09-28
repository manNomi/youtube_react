import Shorts from "../../shorts";
import Home from "../../home";
import Detail from "../../detail";
import Aside from "../../aside";
import ExceptPage from "../../except";
import { Routes, Route } from "react-router-dom";
const Page = () => {
  return (
    <>
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
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
