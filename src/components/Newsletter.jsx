const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-8 w-full bg-accent flex items-center flex-col text-center">
      <img
        className="lg:w-52 w-36 mb-6"
        src="./images/newsletter2.png"
        alt="Newsletter"
      />
      <h2 className="text-2xl font-semibold mb-4">
        Sign up to our newsletter!
      </h2>
      <p className="mb-6">
        Get exclusive offers, sneak peeks of our best deals, plus expert travel
        tips and the latest advice on your next destination.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 mb-4 border border-gray-300 rounded-lg xl:w-1/4 lg:w-2/4 md:w-3/4 w-3/4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-primary transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
