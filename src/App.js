import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStorage } from "./Context";
import Routes from "./routes";

import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </GlobalStorage>
  );
};

export default App;
