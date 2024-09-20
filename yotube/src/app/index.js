import Header from "./ui/header";
import Page from "../page";
import { darkTheme, lightTheme } from "../shared/style/theme.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle.js";
import useDarkModeState from "./model/useDarkModeState/useDarkModeState.js";
const App = () => {
  const [darkModeState, darkModeClick] = useDarkModeState();
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeProvider theme={darkModeState ? darkTheme : lightTheme}>
          <Header darkModeClick={darkModeClick} />
          <Page />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
