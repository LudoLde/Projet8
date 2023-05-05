import "../styles/ListEquip.css";
const ListEquip = () => {
   return (
      <div className="list-equip-container">
         <p className="list-equip-text">Équipements</p>
         <ul className="list-equip-items">
            <li>Climatisation</li>
            <li>Wi-Fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li>Cintres</li>
         </ul>
      </div>
   );
};

export default ListEquip;
