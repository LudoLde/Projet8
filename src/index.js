import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ListEquip from "./components/ListEquip";
import SectionLocation from "./components/SectionLocation";
//import Tag from "./components/Tag";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <NavBar />
      <Banner />
      <SectionLocation />
      <ListEquip
         titre="Équipement"
         listElement={["Climatisation", "Wi-Fi", "Cuisine", "Espace de travail", "Fer à repasser", "Sèche-cheveux", "Cintres"]}
         paragraphe=""
      />
      <ListEquip titre="Respect" paragraphe="bonjour tout le monde" listElement={[]} />
   </React.StrictMode>
);

reportWebVitals();
