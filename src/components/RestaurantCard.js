import {CDN_URL} from "../utils/constants";
// const styleCard = {
//     backgroundColor: "#f0f0f0"
// };

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRatingString, sla, costForTwo} = resData?.info;
    return (
        // style={styleCard}
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <div className="h-[200px]">
            <img className="rounded-lg h-full w-full" alt="restaurant-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            </div>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

// Higher order component

// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;