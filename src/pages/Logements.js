import { useParams } from "react-router-dom";
import data from "../data/data.json";
import MenuDeroulant from "../components/MenuDeroulant";
import "../styles/Logements.css";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import StarRating from "../components/StarsRating";

const Logements = () => {
   const params = useParams();
   const element = data.find((element) => element.id === params.id);
   let names = element.host.name;
   const rating = element.rating;
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
               <img className="info-proprietaire-image" src={pictures} alt="img-proprio" />
               <StarRating rating={rating} />
            </div>
         </div>

         <div className="logements-description">
            <MenuDeroulant titre="Description" paragraphe={element.description} listElement={[]} />
            <MenuDeroulant titre="Équipements" paragraphe="" listElement={element.equipments} />
         </div>
      </section>
   );
};
export default Logements;
