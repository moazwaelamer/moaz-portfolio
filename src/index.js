import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // مهم جداً
import "./index.css";
import profile from "./assets/profile.jpg";
const favicon = document.querySelector("link[rel~='icon']");
if (favicon) {
  favicon.href = profile;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
