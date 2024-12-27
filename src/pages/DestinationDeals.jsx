import DestinationCards from "../components/DestinationCards";

const DestinationDeals = () => {
  const dealArray = [
    {
      title: "Morocco, San Beda Hotel",
      img: "path/to/morocco-hotel.jpg", // Update with the actual image path
      description:
        "A beautiful hotel at the heart of Morocco, offering stunning views and exquisite hospitality.",
      price: 150,
    },
    {
      title: "Paris, Luxe Charm Hotel",
      img: "path/to/paris-hotel.jpg", // Update with the actual image path
      description:
        "Experience the elegance of Paris with this charming hotel near the Eiffel Tower.",
      price: 200,
    },
    {
      title: "Maldives, Coral Retreat",
      img: "path/to/maldives-hotel.jpg", // Update with the actual image path
      description:
        "Relax in the serene beauty of the Maldives at this luxurious beachfront retreat.",
      price: 300,
    },
    {
      title: "Tokyo, Sakura Stay",
      img: "path/to/tokyo-hotel.jpg", // Update with the actual image path
      description:
        "Enjoy the vibrant culture of Tokyo with a stay at this centrally located hotel.",
      price: 180,
    },
  ];

  return (
    <>
      {dealArray.map((deal, index) => {
        return (
          <DestinationCards
            key={index}
            title={deal.title}
            description={deal.description}
            img={deal.img}
          />
        );
      })}
    </>
  );
};

export default DestinationDeals;
