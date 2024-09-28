import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../../../shared/reudx/action/themeAction";
export const useThemeChangeEvent = () => {
  const dispatch = useDispatch();
  const theme_dark = useSelector((store) => store.theme_dark);
  return () => {
    dispatch(changeTheme(theme_dark)); // 버튼 클릭 시 테마 변경
  };
};
