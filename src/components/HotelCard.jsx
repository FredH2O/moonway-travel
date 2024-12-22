import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const HotelCard = ({ id, image, name, location, rating }) => {
  return (
    <div className="hover:shadow-xl transition-all max-w-sm h-full w-full bg-primary border rounded-lg shadow border-gray-400">
      <a href="#">
        <img
          className="rounded-t-lg w-full object-cover h-1/2"
          src={image}
          alt={name}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">Location: {location}</p>
        <p className="mb-3 font-normal text-gray-400">Rating: ⭐ {rating}</p>
        <Link
          to={`/hotels/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-1 focus:outline-none focus:ring-accent"
        >
          Read more <ArrowLongRightIcon className="w-5 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
