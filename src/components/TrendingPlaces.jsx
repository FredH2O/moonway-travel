const TrendingPlaces = () => {
  const places = [
    { name: "Japan", image: "./images/japan.jpg" },
    { name: "China", image: "./images/china.jpg" },
    { name: "Philippines", image: "./images/philippines.jpg" },
    { name: "Thailand", image: "./images/thailand.jpg" },
    { name: "Singapore", image: "./images/singapore.jpg" },
  ];

  return (
    <section className="md:mx-[15%] mx-[5%] py-8">
      <div className="text-center lg:text-left">
        <h2 className="text-4xl italic font-extrabold">Asia Tour</h2>
        <p className="text-lg mb-5">
          Our most <span className="text-red-500 font-semibold">popular</span>{" "}
          tours right now.
        </p>
      </div>

      <div>
        {/* 2 column grid here */}
        <div className="grid lg:grid-cols-2 gap-4">
          {places.slice(0, 2).map((place, index) => (
            <div className="relative" key={index}>
              <h3 className="text-2xl rounded-lg absolute inset-0 text-white flex items-start justify-start bg-black bg-opacity-50 p-4">
                {place.name}
              </h3>
              <img className="rounded-lg" src={place.image} alt={place.name} />
            </div>
          ))}
        </div>

        {/* 3 column grid here */}
        <div className="grid lg:grid-cols-3 gap-4 mt-8">
          {places.slice(2).map((place, index) => (
            <div className="relative" key={index}>
              <h3 className="text-2xl rounded-lg absolute inset-0 text-white flex items-start justify-start bg-black bg-opacity-50 p-4">
                {place.name}
              </h3>
              <img className="rounded-lg" src={place.image} alt={place.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPlaces;
