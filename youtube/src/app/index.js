import Header from "./ui/header";
import Page from "../pages/page/ui/Page.js";
import { darkTheme, lightTheme } from "./style/theme.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle.js";
import { useSelector } from "react-redux";
import { useInitCookie } from "./model/useCookie.js";
import { PC, Mobile } from "./model/useMediaQuery.js";

const App = () => {
  const theme_dark = useSelector((store) => store.theme_dark);
  useInitCookie();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme_dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <PC>
          <Header />
          <Page />
        </PC>
        <Mobile>
          <Header />
          <Page />
        </Mobile>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
