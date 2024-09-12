import Header from "../widget/header";
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
