import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ListEquip from "./components/ListEquip";
//import Tag from "./components/Tag";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <NavBar />
      <Banner />
      <ListEquip />
   </React.StrictMode>
);

reportWebVitals();
