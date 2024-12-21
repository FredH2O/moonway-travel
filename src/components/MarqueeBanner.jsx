import Marquee from "react-fast-marquee";

const MarqueeExample = () => {
  const marqueeBanner = [
    {
      message: "Book your hotel now and get up to 20% off! Limited time offer.",
    },
    {
      message:
        "Don't miss out! Check out the best hotel deals for your next vacation with Moonway Travels.",
    },
    {
      message:
        "Explore new destinations with Moonway Travels. Find the perfect getaway!",
    },
    {
      message:
        "Exclusive deals for early bookings! Save more with Moonway Travels.",
    },
    {
      message:
        "Need help planning your trip? Contact Moonway Travels for expert assistance.",
    },
  ];

  return (
    <div className="bg-accent h-20 flex items-center justify-center">
      <Marquee gradient={false} speed={50}>
        {marqueeBanner.map((marquee, index) => (
          <div key={index} className="flex items-center mr-10">
            <img
              src="/images/newsletter2.png"
              alt="Newsletter Logo"
              className="w-32 mr-4"
            />
            <p className="text-2xl font-semibold text-primary">
              {marquee.message}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeExample;
