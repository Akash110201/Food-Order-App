import { CDN_URL } from "../utils/constants";

const RestraurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div data-testid="resCard" className="res-card m-6 p-3 w-[242] rounded-xl bg-gray-200 shadow-lg hover:bg-gray-300">
      <img className="res-logo rounded-xl" src={CDN_URL + cloudinaryImageId} />
      <h3 className="name font-bold py-3 text-lg">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating} stars</h4>
      <h4 className="cost-for-two">{costForTwo}</h4>
      <h4 className="delivery italic">
        {resData.info.sla.deliveryTime} minutes{" "}
      </h4>
    </div>
  );
};

export default RestraurantCard;
