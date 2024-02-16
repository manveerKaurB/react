import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/slice/cartSlice";
const ItemList = ({items}) => {
  const dispatch = useDispatch();
  const handleAdditem = (item) => {
    // dispatch an action , sending action payload
    dispatch(addItem(item));
    console.log(item);

  }
 return <div>
  {items.map((item) => (<div
  data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
    <div className="w-9/12">
        <div className="py-2">
            <span className="">{item.card.info.name}</span>
            <span className="">- ₹{(item.card.info.price ? item.card.info.price : item.card.info.defaultPrice) / 100}</span>
        </div>
        <p className="text-xs">{item.card.info.description}
        </p>
    </div>
    <div className="w-3/12 p-4">
        <div className="absolute">
          <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() =>handleAdditem(item)}>Add +</button>
        </div>
        <img src={CDN_URL + item.card.info.imageId}/>
    </div>
  </div>))}
 </div>
}
export default ItemList;