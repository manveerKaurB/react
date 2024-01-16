import {CDN_URL} from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRatingString, deliveryTime, costForTwo} = resData?.info;
    return (
        <div className="restaurant-card" style={styleCard}>
            <img className="restaurant-logo" alt="restaurant-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;