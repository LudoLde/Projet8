import "../styles/Tag.css";
import data from "../data/data.json";

const Tag = (props) => {
   const elements = data;
   const listTag = props.listTag;
   console.log(elements);
   return (
      <ul>
         <li>{`${listTag}`}</li>
      </ul>
   );
};
export default Tag;
