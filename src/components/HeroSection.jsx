import Booking from "./Booking";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* dark cover */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <img
        className="w-full h-full object-cover xl:object-fill"
        src="/images/heroImage.jpg"
        alt="Hero Image"
      />
      <div className="flex items-center justify-center absolute inset-0 text-secondary text-center">
        <div>
          <h1 className="text-5xl">Moonway Travels</h1>
          <p className="mt-4">
            Explore the world with us and create unforgettable memories. Your
            dream destination awaits!
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-accent hover:text-black transition mt-5">
            Book Now !
          </button>
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
