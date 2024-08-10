import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import App from "./App";
import "./index.css";
import { portfolioStore } from "./pages/portfolio/logic/portfolioStore";
import { stockQuoteStore } from "./pages/stockQuote/logic/stockQuoteStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider portfolioStore={portfolioStore} stockQuoteStore={stockQuoteStore}>
    <App />
  </Provider>
);
