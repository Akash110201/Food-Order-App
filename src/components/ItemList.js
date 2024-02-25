import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    //dispatch an action
    dispatch(addItem(items));
  };
  return (
    <div>
      {items.map((items) => (
        <div
        data-testid="foodItems"
          key={items.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2  text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-bold">
              <span>{items.card.info.name}</span>
              <span>
                - ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-zinc-400 italic py-1">
              {items.card.info.description}
            </p>
          </div>

          <div className="">
            <div className="absolute">
              <button
                className="p-2 bg-black text-white mx-15 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handleAddItem(items);
                }}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + items.card.info.imageId}
              className="h-40 w-40 object-cover rounded-lg shadow-lg"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
