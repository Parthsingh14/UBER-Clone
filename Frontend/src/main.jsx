//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Context_user from "./context/Context_user.jsx";
import CapatainContext from './context/CapatainContext.jsx';

// Ensure CaptainContext is only wrapped once here
createRoot(document.getElementById("root")).render(
    <CapatainContext>
      <Context_user>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context_user>
    </CapatainContext>
);
