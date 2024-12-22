import { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import axios from "axios";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedHotels = async () => {
      try {
        const response = await axios.get("/moonway-travel/data/hotels.json");
        setHotels(response.data);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch data");
        setLoading(false);
        console.error("Error", err);
      }
    };

    fetchedHotels();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid place-items-center xl:grid-cols-3 md:grid-cols-2 lg:mx-[15%] sm:mx-[5%] my-5 gap-5">
      {hotels.map((hotel) => {
        return (
          <HotelCard
            key={hotel.id}
            id={hotel.id}
            image={`/moonway-travel/${hotel.imageUrl}`}
            name={hotel.name}
            location={hotel.location}
            rating={hotel.rating}
          />
        );
      })}
    </div>
  );
};

export default Hotels;
