import { useDispatch } from "react-redux";
import { changeTheme } from "../../shared/reudx/action/themeAction";
import { setCookie } from "../../shared/cookie/cookie";
export const useThemeChangeEvent = (theme_dark) => {
  const dispatch = useDispatch();
  return () => {
    dispatch(changeTheme(theme_dark));
    setCookie("theme", theme_dark, new Date(Date.now() + 86400e3));
  };
};
