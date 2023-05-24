import { useParams } from "react-router-dom";
import data from "../data/data.json";
import MenuDeroulant from "../components/MenuDeroulant";
import "../styles/Logements.css";
import Carroussel from "../components/Carroussel";

const Logements = () => {
   const elements = data;
   const params = useParams();
   const element = data.find((element) => element.id === params.id);
   let names = element.host.name;
   let pictures = element.host.picture;

   return (
      <section className="logements-container-infos">
         <Carroussel />
         <div className="logement-infos">
            <p className="logement-infos-title">{element.title}</p>
            <p className="logement-infos-emplacement">{element.location}</p>
         </div>
         <div className="info-proprietaire-container">
            <p className="info-proprietaire-para">{names}</p>
            <img className="info-proprietaire-image" src={pictures} />
         </div>
         <div className="logements-description">
            <MenuDeroulant titre="Description" paragraphe={element.description} listElement={[]} />
            <MenuDeroulant titre="Équipements" paragraphe="" listElement={element.equipments} />
         </div>
      </section>
   );
};
export default Logements;
