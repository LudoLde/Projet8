import "../styles/Logements.css";
import LogementInfo from "./LogementInfo";
import LogementProprio from "./LogementProprio";

const LogementDetails = (props) => {
   const element = props.element;
   return (
      <div className="logement-infos-container">
         <LogementInfo element={element} />
         <LogementProprio element={element} />
      </div>
   );
};
export default LogementDetails;
