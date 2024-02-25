import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);

  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleClick}>
          {/** accordian header */}
          <span className="font-semibold text-lg font hover:cursor-pointer">
            {/** accordian body */}
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItems == true && <ItemList items={data?.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
