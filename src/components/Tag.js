import "../styles/Tag.css";

const Tag = (props) => {
   const element = props.element;
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
