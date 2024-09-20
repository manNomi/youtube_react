import Header from "./ui/header";
import Page from "../page";
import theme from "../shared/style/theme.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle.js";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Page />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
