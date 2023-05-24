import data from "../data/data.json";
import "../styles/Carroussel.css";
import { useParams } from "react-router-dom";

const Carroussel = () => {
   const params = useParams();
   const element = data.find((element) => element.id === params.id);
   const images = element.pictures;
   console.log(images);
   return (
      <div>
         {images.map((image, index) => (
            <img key={`${image}-${index}`} src={image} />
         ))}
      </div>
   );
};

export default Carroussel;
