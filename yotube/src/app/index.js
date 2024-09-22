import Header from "./ui/header";
import Page from "../page";
import { darkTheme, lightTheme } from "../shared/style/theme.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle.js";
import {
  DarkModeProvider,
  useDarkMode,
} from "./model/useDarkModeState/useDarkModeState.js";
const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <AppTheme />
      </BrowserRouter>
    </DarkModeProvider>
  );
};

const AppTheme = () => {
  const { darkModeState } = useDarkMode();
  return (
    <ThemeProvider theme={darkModeState ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Page />
    </ThemeProvider>
  );
};
export default App;
