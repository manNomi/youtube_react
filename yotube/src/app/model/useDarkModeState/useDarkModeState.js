import React from "react";
const useDarkModeState = () => {
  const [darkModeState, setdarkModeState] = React.useState(false);
  const darkModeClick = () => {
    setdarkModeState(!darkModeState);
    console.log(darkModeState);
  };
  return [darkModeState, darkModeClick];
};
export default useDarkModeState;
