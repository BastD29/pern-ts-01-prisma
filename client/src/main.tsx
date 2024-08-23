import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./style/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
);
