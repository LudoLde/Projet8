import BannerAPropos from "../components/BannerAPropos";
import MenuDeroulant from "../components/MenuDeroulant";
import "../styles/APropos.css";

const APropos = () => {
   return (
      <div className="a-propos-container">
         <BannerAPropos />
         <MenuDeroulant
            titre="Fiablité"
            paragraphe="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont regulièrement vérifiées par nos équipes."
            listElement={[]}
         />
         <MenuDeroulant
            titre="Respect"
            paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
            listElement={[]}
         />
         <MenuDeroulant
            titre="Service"
            paragraphe="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            listElement={[]}
         />
         <MenuDeroulant
            titre="Sécurité"
            paragraphe="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            listElement={[]}
         />
      </div>
   );
};
export default APropos;
