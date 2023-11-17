import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";

import "./styles/index.css";

// React Loading Skeleton
import "react-loading-skeleton/dist/skeleton.css";

// SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css";

// Animate.css
import "animate.css";
import { Provider } from "react-redux";
import { store } from "./states";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
