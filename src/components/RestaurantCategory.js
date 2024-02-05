import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    const [showItems, setShowitems] = useState(false);
    const handleClick = () => {
        setShowitems(!showItems);
    }
   
   return (
    <div>
      {/* Header */}
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
         <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
         <span>{showItems ? '⬆️' : '⬇️'}</span>
        </div> 
        { showItems && <ItemList items={data.itemCards}/> }
     </div>
    {/* accordian body */}
    </div>
   )
};
export default RestaurantCategory;