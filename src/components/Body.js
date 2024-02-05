  import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
  // not using keys (not acceptable) <<<<<<< index as key <<<<<<<< unique id (best practice)
  const Body = () => {
    // local state variable - super power variable
    const [listOfRestautants, setListOfRestautants] = useState([]); //restaurantList
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // normal js variable
    // let listOfRestautants = restaurantList;
    // whenever state variable update, react triggers a reconciliaion cycle(re-renders the component)
    // if no dependency array => useeffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    // if dependency array is [toggleBtnName] => called everytime toggleBtnName is updated
    useEffect(()=>{
        // console.log("useEffect called");
        fetchData();
    },[]);

    const fetchData = async ()=>{
        // https://corsproxy.io/?           cloudfare cors proxy
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // optional chaining
        setListOfRestautants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards);
    }
    if(onlineStatus === false) {
        return <h1>Looks like you are offline, Please check your internet connection</h1>
    }
    // if(listOfRestautants.length === 0){
    //     // return <h1>Loading...</h1>
    //     return <Shimmer/>
    // }
    // console.log("body rendered");
    return listOfRestautants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} value={searchText}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        console.log(searchText);
                        const filteredData = listOfRestautants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredData);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={()=> {
                        setListOfRestautants(listOfRestautants.filter(res=> res.info.avgRating > 4.5));
                        console.log(listOfRestautants);
                    }}>
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                    {/* if the restaurant is open then show open label */}
                    {restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant}/>) :
                    (<RestaurantCard resData={restaurant}/>) }
                    </Link>)
                }
            </div>
        </div>
    )
}

export default Body;