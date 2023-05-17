import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "../src/styles/Police.css";
import reportWebVitals from "./reportWebVitals";
import SectionLocation from "./components/SectionLocation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

reportWebVitals();
