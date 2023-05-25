import banner from "../assets/banner-a-propos.png";
import "../styles/BannerAPropos.css";
const BannerAPropos = () => {
   return (
      <div className="banner-apropos-container">
         <img src={banner} alt="big-mountain" className="banner-a-propos" />
      </div>
   );
};
export default BannerAPropos;
