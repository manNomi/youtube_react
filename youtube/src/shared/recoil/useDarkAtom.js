import { atom, useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

const darkAtom = atom({
  key: "dark_ATOM",
  default: false,
});

const useDarkAtom = () => {
  const dark = useRecoilValue(darkAtom);
  const setDark = useSetRecoilState(darkAtom);
  const setDarkEvent = (dark_name) => {
    setDark(dark_name);
  };
  return [dark, setDarkEvent];
};
export default useDarkAtom;
