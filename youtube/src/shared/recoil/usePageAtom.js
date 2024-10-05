import { atom, useSetRecoilState } from "recoil";
import { useRecoilValue, useRecoilState } from "recoil";

const pageAtom = atom({
  key: "PAGE_ATOM",
  default: "/",
});

const usePageAtom = () => {
  const page = useRecoilValue(pageAtom);
  const setPage = useSetRecoilState(pageAtom);
  const setPageEvent = (page_name) => {
    setPage(page_name);
  };
  return [page, setPageEvent];
};
export default usePageAtom;
