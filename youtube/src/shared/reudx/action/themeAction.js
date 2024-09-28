export const changeTheme = (theme_dark) => {
  const action = {
    type: "CHANGE_THEME",
    theme_dark: !theme_dark,
  };
  return action;
};

export const resetTheme = () => {
  const aciton = {
    type: "RESET_THEME",
  };
  return aciton;
};
