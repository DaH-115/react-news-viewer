import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  // category 의 값은 선택적(optional)
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
