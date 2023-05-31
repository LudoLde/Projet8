import "../styles/Logements.css";
import StarRating from "../components/StarsRating";

const LogementProrio = (props) => {
   const element = props.element;
   let names = element.host.name;
   const rating = element.rating;
   let pictures = element.host.picture;
   return (
      <div className="info-proprietaire-container">
         <p className="info-proprietaire-para">{names}</p>
         <img className="info-proprietaire-image" src={pictures} alt="img-proprio" />
         <StarRating rating={rating} />
      </div>
   );
};
export default LogementProrio;
