import Header from "./ui/header";
import Page from "../page";
import "../shared/style/reset.css";
import theme from "../shared/style/theme.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
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
