import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {AppLevelContextProvider} from "./context/AppLevelContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppLevelContextProvider>
      <App />
    </AppLevelContextProvider>
  </React.StrictMode>,
);
