import './card-list.styles.css';
import Card from "../card/card.components";

const CardList = ({ monsters }) => {
    
    return (
    <div className="card-list" key={monsters.id}>
        {monsters.map((monster) => {
            return(
                <Card monster={monster}/>
            )         
            })}        
    </div>
    );
}

export default CardList;