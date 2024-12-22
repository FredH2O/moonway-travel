import aboutImage from "../../public/images/about-image.jpg";

const About = () => {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center py-8 px-4 bg-gray-100">
      <img
        src={aboutImage}
        alt="About Us"
        loading="lazy"
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto rounded-full mb-6 object-cover"
      />
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl px-4">
        Moonway Travel is your trusted partner in booking exceptional hotel
        stays and planning unforgettable holidays. We specialize in offering
        personalized travel experiences that cater to your needs, from
        budget-friendly accommodations to luxurious getaways. Our goal is to
        make your travel seamless by providing the best hotel deals, outstanding
        customer service, and unforgettable memories. Whether you're planning a
        family vacation, business trip, or romantic retreat, Moonway Travel
        ensures a smooth journey from start to finish.
      </p>
    </section>
  );
};

export default About;
