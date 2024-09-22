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
