// import React from "react";
// const useDarkModeState = () => {
//   const [darkModeState, setdarkModeState] = React.useState(false);
//   const darkModeClick = () => {
//     setdarkModeState(!darkModeState);
//   };
//   return [darkModeState, darkModeClick];
// };
// export default useDarkModeState;

import React, { createContext, useContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkModeState, setDarkModeState] = React.useState(false);

  const darkModeClick = () => {
    setDarkModeState(!darkModeState);
  };

  return (
    <DarkModeContext.Provider value={{ darkModeState, darkModeClick }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
