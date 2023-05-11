import "../styles/MenuDeroulant.css";
import { useState } from "react";

const MenuDeroulant = (props) => {
   const { paragraphe, listElement } = props;
   const titre = props.titre;
   {
      /*const paraRespect = props.paragraphe;
const listElement = props.listElement;*/
   }
   const [isActive, setIsActive] = useState(false);
   const showDetails = () => {
      setIsActive((current) => !current);
   };
   return (
      <div className="menu-deroulant-container">
         <p className="menu-deroulant-text" onClick={showDetails}>
            {titre}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={isActive ? "svg-design-active" : "svg-design"}>
               <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
         </p>
         {listElement.length > 1 && (
            <ul className={isActive ? "menu-deroulant-items" : "menu-deroulant-items-none"}>
               {listElement.map((element, index) => (
                  <li key={`${element}-${index}`}>{element}</li>
               ))}
            </ul>
         )}
         {listElement.length == 0 && <p className={isActive ? "menu-deroulant-items" : "menu-deroulant-items-none"}>{paragraphe}</p>}
      </div>
   );
};

export default MenuDeroulant;
