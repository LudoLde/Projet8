import banner from "../assets/banner.png";
import "../styles/Banner.css";
const Banner = () => {
   return (
      <div className="banner-container">
         <h2 className="banner-text">Chez vous, partout et ailleurs</h2>
         <img src={banner} alt="montagne" className="banner-image" />
      </div>
   );
};
export default Banner;
