import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Context_user from "./context/Context_user.jsx";
import Context_captain from "./context/Context_captain.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context_captain>
      <Context_user>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context_user>
    </Context_captain>
  </StrictMode>
);
