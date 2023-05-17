import "../styles/SectionLocation.css";
import data from "../data/data.json";

const SectionLocation = () => {
   const listLocations = data.map((element) => (
      <a key={element.id} href="" className="location-cards">
         <p className="location-card-text">{element.title}</p>
         <img src={element.cover} alt={element.description} className="location-image-card" />
      </a>
   ));
   return <div className="location-container">{listLocations}</div>;
};

export default SectionLocation;
