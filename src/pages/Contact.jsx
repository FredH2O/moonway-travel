const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          We'd love to hear from you. Please reach out with any questions or
          feedback.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-6 space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-3/4 mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-3/4 mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-3/4 mt-1 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-1/2 py-2 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
