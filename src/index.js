import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import MenuDeroulant from "./components/MenuDeroulant";
import SectionLocation from "./components/SectionLocation";
import Footer from "./components/Footer";
//import Tag from "./components/Tag";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <NavBar />
      <Banner />
      <SectionLocation />

      <MenuDeroulant
         titre="Équipement"
         listElement={["Climatisation", "Wi-Fi", "Cuisine", "Espace de travail", "Fer à repasser", "Sèche-cheveux", "Cintres"]}
         paragraphe=""
      />
      <Footer />
      {/*<MenuDeroulant
         titre="Respect"
         paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme"
         listElement={[]}
      />
      <MenuDeroulant titre="Sécurité" paragraphe="" listElement={[]} />
      <MenuDeroulant titre="Fiablité" paragraphe="" listElement={[]} />*/}
   </React.StrictMode>
);

reportWebVitals();
