import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPortfolioPage from "./pages/portfolio";
import StockQuotePage from "./pages/stockQuote";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserPortfolioPage />} />
      <Route path="/stock/:symbol" element={<StockQuotePage />} />
    </Routes>
  </Router>
);

export default App;
