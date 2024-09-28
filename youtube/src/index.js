import ReactDOM from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import store from "./shared/reudx/reducer.js";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
);
