import { useParams } from "react-router-dom";
import data from "../data/data.json";
import MenuDeroulant from "../components/MenuDeroulant";
import "../styles/Logements.css";
import Carousel from "../components/Carousel";
import LogementDetails from "../components/LogementDetails";

const Logements = () => {
   const params = useParams();
   const element = data.find((element) => element.id === params.id);
   return (
      <section className="logements-container-infos">
         <Carousel />
         <LogementDetails element={element} />
         <div className="logements-description">
            <MenuDeroulant titre="Description" paragraphe={element.description} listElement={[]} />
            <MenuDeroulant titre="Équipements" paragraphe="" listElement={element.equipments} />
         </div>
      </section>
   );
};
export default Logements;
