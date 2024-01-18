  import RestaurantCard from "./RestaurantCard";
  import {restaurantList} from "../utils/mockData";
  import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
  // not using keys (not acceptable) <<<<<<< index as key <<<<<<<< unique id (best practice)
  const Body = () => {
    // local state variable - super power variable
    const [listOfRestautants, setListOfRestautants] = useState([]); //restaurantList
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    // normal js variable
    // let listOfRestautants = restaurantList;
    // whenever state variable update, react triggers a reconciliaion cycle(re-renders the component)
    useEffect(()=>{
        // console.log("useEffect called");
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestautants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    }

    // if(listOfRestautants.length === 0){
    //     // return <h1>Loading...</h1>
    //     return <Shimmer/>
    // }
    // console.log("body rendered");
    return listOfRestautants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} value={searchText}/>
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredData = listOfRestautants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredData);
                    }}>Search</button>
                </div>
                <button className="filter-button" onClick={()=> {
                    setListOfRestautants(listOfRestautants.filter(res=> res.info.avgRating > 4.5));
                    console.log(listOfRestautants);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;