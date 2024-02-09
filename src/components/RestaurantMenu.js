import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="text-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>
            {/* categories accordian - title, header, body */}
            {/* <ul>
            {itemCards.map((item)=>{return <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price /100 || item.card.info.defaultPrice / 100}</li>
            })}
             </ul> */}
            {categories.map((category, index) => (
            <RestaurantCategory 
            data={category?.card?.card} 
            key={category?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex = {()=> setShowIndex(index)}/>
            ))}
        </div>
    )
}
export default RestaurantMenu;