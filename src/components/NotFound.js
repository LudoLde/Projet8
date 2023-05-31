import { Link } from "react-router-dom";
import "../styles/Error.css";

const NotFound = () => {
   return (
      <div className=" error-container color">
         <h2 className="title-error">404</h2>
         <p className="para-error">Oups! La page que vous demandez n'existe pas.</p>
         <Link to="/" className="back-menu-error">
            Retourner sur la page d'accueil
         </Link>
      </div>
   );
};
export default NotFound;
