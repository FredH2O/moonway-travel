import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams(); // hotel id
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`/data/hotels.json`);
        const selectedHotel = response.data.find(
          (hotel) => hotel.id === parseInt(id)
        );
        setHotel(selectedHotel);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch hotel details");
        setLoading(false);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-700">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl md:my-10 w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={hotel.imageUrl}
          alt={hotel.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{hotel.name}</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Location:</span> {hotel.location}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Board Basis:</span>{" "}
            {hotel.boardBasis}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Dates of Travel:</span>{" "}
            {hotel.datesOfTravel.join(" to ")}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Rating:</span> ⭐ {hotel.rating}
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Rooms:</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {hotel.rooms.map((room, index) => (
                <li key={index}>
                  {room.roomType}: {room.amount} available
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Price Range:
            </h3>
            <ul className="list-disc pl-5 text-gray-600">
              {Object.entries(hotel.priceRange).map(
                ([roomType, range, asd]) => (
                  <li key={roomType}>
                    {roomType}: {range}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Available Activities:
            </h3>
            <ul className="list-disc pl-5 text-gray-600">
              {hotel.availableActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Discounts:</h3>
            <p className="text-gray-600">{hotel.discounts}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info:
            </h3>
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span>{" "}
              {hotel.contactInfo.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span>{" "}
              {hotel.contactInfo.email}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Nearby Attractions:
            </h3>
            <ul className="list-disc pl-5 text-gray-600">
              {hotel.nearbyAttractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Policies:</h3>
            <p className="text-gray-600">
              <span className="font-semibold">Check-in:</span>{" "}
              {hotel.policies.checkIn}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Check-out:</span>{" "}
              {hotel.policies.checkOut}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Cancellation:</span>{" "}
              {hotel.policies.cancellation}
            </p>
          </div>

          <div className="text-center mt-6">
            <Link
              to={"/confirmed"}
              className="bg-accent hover:bg-blue-500 text-white py-2 px-4 rounded-full"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
