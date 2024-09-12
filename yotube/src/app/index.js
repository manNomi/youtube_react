import Header from "./ui/header";
import Page from "../page";
import "../shared/css/base.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Page />
      </BrowserRouter>
    </>
  );
};
export default App;
