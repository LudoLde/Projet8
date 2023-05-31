import "../styles/Tag.css";
import data from "../data/data.json";
import { useParams } from "react-router-dom";

const Tag = () => {
   const params = useParams();
   const element = data.find((element) => element.id === params.id);
   const TagList = element.tags;
   return (
      <ul className="tag-container">
         {TagList.map((tag, index) => (
            <li key={index} className="tag-design-li">
               {tag}
            </li>
         ))}
      </ul>
   );
};
export default Tag;
