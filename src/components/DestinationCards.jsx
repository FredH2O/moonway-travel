const DestinationCards = ({ img, title, description, oldprice, price }) => {
  return (
    <div className="z-10">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={img}
          alt={title}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex items-center gap-2 text-xl">
            <h3 className="text-gray-500 line-through">€{oldprice}</h3>
            <h3 className="text-green-500 font-semibold">€{price} PP</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DestinationCards;
