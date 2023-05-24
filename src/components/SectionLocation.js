import "../styles/SectionLocation.css";
import data from "../data/data.json";
import { Link } from "react-router-dom";

const SectionLocation = () => {
   const listLocations = data.map((element) => (
      <Link to={"/logements/" + element.id} key={element.id} className="location-cards">
         <p className="location-card-text">{element.title}</p>
         <img src={element.cover} alt={element.description} className="location-image-card" />
      </Link>
   ));
   return <div className="location-container">{listLocations}</div>;
};
export default SectionLocation;
