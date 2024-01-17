  import RestaurantCard from "./RestaurantCard";
  import {restaurantList} from "../utils/mockData";
  import { useState } from "react";
  // not using keys (not acceptable) <<<<<<< index as key <<<<<<<< unique id (best practice)
  const Body = () => {
    // local state variable - super power variable
    const [listOfRestautants, setListOfRestautants] = useState(restaurantList);
    // normal js variable
    // let listOfRestautants = restaurantList;
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-button" onClick={()=> {
                    setListOfRestautants(listOfRestautants.filter(res=> res.info.avgRating > 4.5));
                    console.log(listOfRestautants);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {listOfRestautants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;