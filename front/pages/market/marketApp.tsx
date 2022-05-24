import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Main from "./main";

const MarketApp: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/market/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default MarketApp;