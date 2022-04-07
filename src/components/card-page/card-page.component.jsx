import Card from "../card/card.component";
import "./card-page.styles.css";
const CardPage = ({ superheros }) => {
  return (
    <div className="card-list">
      {superheros.map((superhero) => {
        return <Card superhero={superhero} key={superhero.id} />;
      })}
    </div>
  );
};

export default CardPage;
