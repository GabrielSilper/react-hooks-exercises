import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TextProvider from "./context/TextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TextProvider>
      <App />
    </TextProvider>
  </React.StrictMode>
);
