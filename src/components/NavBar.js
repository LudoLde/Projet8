import "../styles/NavBar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
   const [isActive, setIsActive] = useState(false);
   const LinkActive = () => {
      setIsActive((current) => !current);
   };
   return (
      <div className="navbar-design">
         <img src={logo} alt="logo-Kasa" className="navbar-logo" />
         <ul className="navbar-ul">
            <Link to="/" className={isActive ? "a" : "a-actived"}>
               <li className="navbar-accueil" onClick={LinkActive}>
                  Accueil
               </li>
            </Link>
            <Link to="/a-propos" className={isActive ? "a-actived" : "a"}>
               <li className="navbar-a-propos" onClick={LinkActive}>
                  À Propos
               </li>
            </Link>
         </ul>
      </div>
   );
};
export default NavBar;
