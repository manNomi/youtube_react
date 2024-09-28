import Header from "./ui/header";
import Page from "../pages/page/ui/Page.js";
import { darkTheme, lightTheme } from "./style/theme.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle.js";
import { useSelector } from "react-redux";

const App = () => {
  const theme_dark = useSelector((store) => store.theme_dark);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme_dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <Page />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
