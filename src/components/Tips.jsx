const Tips = () => {
  const tipsBeforeBooking = [
    {
      title: "Book Early for Better Rates",
      description:
        "Booking your hotel well in advance is one of the best ways to ensure you secure better rates and a wider selection of rooms. Hotels often increase their prices as the date of stay approaches, particularly during peak seasons such as holidays or local events. By reserving early, you can not only lock in a more affordable rate but also avoid the risk of limited availability.",
    },
    {
      title: "Check for Discounts and Offers",
      description:
        "Many booking platforms and hotels offer discounts, promo codes, and exclusive offers to attract customers. Be sure to explore options like loyalty programs, which provide members with special deals or perks. Additionally, booking directly through a hotel’s website often provides better rates or added amenities compared to third-party sites. Don’t hesitate to check for any ongoing promotions before finalizing your booking.",
    },
    {
      title: "Read Reviews Before Booking",
      description:
        "One of the most important steps in the booking process is reading guest reviews. These reviews provide firsthand accounts of a hotel’s service, cleanliness, and overall guest experience. They can give you valuable insights into what to expect during your stay. Pay attention to both positive and negative reviews, as they will help you make an informed decision and avoid any unpleasant surprises once you arrive.",
    },
    {
      title: "Consider Location and Transportation",
      description:
        "When selecting a hotel, the location is just as important as the amenities. Ensure that the hotel is conveniently located for your trip, whether it's close to key attractions, restaurants, or public transportation. This can save you time and money on travel expenses. If you're visiting a city for the first time, consider how easy it will be to get around, whether by foot, taxi, or local transit.",
    },
    {
      title: "Understand the Cancellation Policy",
      description:
        "Before confirming your reservation, always make sure to thoroughly read and understand the hotel’s cancellation policy. Some hotels offer flexible cancellation options, allowing you to change or cancel your reservation without incurring penalties, while others may charge a fee if you cancel too close to your arrival date. Knowing the details ahead of time will help you avoid unexpected charges if your travel plans change.",
    },
    {
      title: "Look for Extra Amenities",
      description:
        "In addition to the basics, many hotels offer complimentary amenities that can enhance your stay. Free perks such as breakfast, Wi-Fi, parking, or shuttle services can make a significant difference in your overall experience. Take the time to check what’s included in your booking so you can better plan your stay and make the most of what the hotel has to offer.",
    },
  ];

  return (
    <section className="my-10">
      <h2 className="text-center text-4xl italic font-semibold">
        Planning Your Trip?
        <span className="text-red-600">
          <span className="hidden sm:inline"> Read This First!</span>
          <span className="inline sm:hidden">
            <br /> Read This First!
          </span>
        </span>
      </h2>
      <div className="gap-10 grid lg:grid-cols-2 mx-[15%] my-10 text-center lg:text-justify">
        {tipsBeforeBooking.map((tips, index) => {
          return (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-3 border-b xl:w-3/4">
                {tips.title}
              </h4>
              <p className="text-gray-700 text-sm">{tips.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tips;
