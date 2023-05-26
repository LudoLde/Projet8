import { useParams } from "react-router-dom";
import data from "../data/data.json";
import MenuDeroulant from "../components/MenuDeroulant";
import "../styles/Logements.css";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import SvgStars from "../components/SvgStars";
import StarRating from "../components/Test";

const Logements = () => {
   const params = useParams();
   const element = data.find((element) => element.id === params.id);
   let names = element.host.name;
   let pictures = element.host.picture;

   return (
      <section className="logements-container-infos">
         <Carousel />
         <div className="logement-infos-container">
            <div className="logement-infos-container-1">
               <p className="logement-infos-title">{element.title}</p>
               <p className="logement-infos-emplacement">{element.location}</p>
               <Tag />
            </div>
            <div className="info-proprietaire-container">
               <p className="info-proprietaire-para">{names}</p>
               <img className="info-proprietaire-image" src={pictures} />
               <SvgStars />
            </div>
         </div>

         <div className="logements-description">
            <MenuDeroulant titre="Description" paragraphe={element.description} listElement={[]} />
            <MenuDeroulant titre="Équipements" paragraphe="" listElement={element.equipments} />
         </div>
         <StarRating />
      </section>
   );
};
export default Logements;
