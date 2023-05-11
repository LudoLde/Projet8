import "../styles/Footer.css";
import logoFooter from "../assets/logo-footer.png";
import rights from "../assets/rights.png";
const Footer = () => {
   return (
      <footer className="footer-container">
         <img src={logoFooter} alt="logo-footer" className="logo-footer" />
         <img src={rights} alt="rights" className="rights" />
      </footer>
   );
};

export default Footer;
