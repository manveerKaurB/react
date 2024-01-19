import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    fetchMenu = async ()=> {
        const data = await fetch(MENU_URL + resId);
        // "&catalog_qa=undefined&submitAction=ENTER"
        const json = await data.json();
        setResInfo(json.data);
        // console.log(json);
    }
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