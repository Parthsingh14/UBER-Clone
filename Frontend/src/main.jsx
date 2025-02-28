import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Context_user from "./context/Context_user.jsx";
import CaptainContext from './context/CaptainContext.jsx';

// Ensure CaptainContext is only wrapped once here
createRoot(document.getElementById("root")).render(
    <CaptainContext>
      <Context_user>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context_user>
    </CaptainContext>
);
