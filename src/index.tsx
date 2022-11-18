import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./input.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./globalState/store/store";
import { Provider } from "react-redux";
if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
