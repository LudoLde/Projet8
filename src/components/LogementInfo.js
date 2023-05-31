import "../styles/Logements.css";
import Tag from "./Tag";

const LogementInfo = (props) => {
   const element = props.element;
   return (
      <div className="logement-infos-container-1">
         <p className="logement-infos-title">{element.title}</p>
         <p className="logement-infos-emplacement">{element.location}</p>
         <Tag element={element} />
      </div>
   );
};
export default LogementInfo;
