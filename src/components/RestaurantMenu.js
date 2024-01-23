import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')}</p>
            <h3>{costForTwoMessage}</h3>
            <ul>
            {itemCards.map((item)=>{return <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price /100 || item.card.info.defaultPrice / 100}</li>
            })}
             </ul>
        </div>
    )
}
export default RestaurantMenu;