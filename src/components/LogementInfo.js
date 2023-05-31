import Tag from "../components/Tag";
import "../styles/Logements.css";

const LogementInfo = (props) => {
   const element = props.element;
   return (
      <div className="logement-infos-container-1">
         <p className="logement-infos-title">{element.title}</p>
         <p className="logement-infos-emplacement">{element.location}</p>
         <Tag />
      </div>
   );
};
export default LogementInfo;
