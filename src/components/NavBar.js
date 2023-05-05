import "../styles/NavBar.css";
import logo from "../assets/logo.png";

const NavBar = () => {
   return (
      <div className="navbar-design">
         <img src={logo} alt="logo-Kasa" className="navbar-logo" />
         <ul className="navbar-ul">
            <li className="navbar-accueil">Accueil</li>
            <li>À Propos</li>
         </ul>
      </div>
   );
};
export default NavBar;
