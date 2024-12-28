import DestinationCards from "../components/DestinationCards";
import dealArray from "../data/dealArray";

const DestinationDeals = () => {
  return (
    <div
      className="py-3 bg-center bg-cover bg-no-repeat relative grid w-screen h-full grid-cols-2 place-items-center gap-4"
      style={{
        backgroundImage: `url(/moonway-travel/${"./images/destinationBackground.jpg"})`,
      }}
    >
      <div className="absolute bg-black inset-0 opacity-75"></div>
      {dealArray.map((deal, index) => {
        return (
          <DestinationCards
            key={index}
            title={deal.title}
            description={deal.description}
            img={`/moonway-travel/${deal.img}`}
            price={deal.price}
            oldprice={deal.oldPrice}
          />
        );
      })}
    </div>
  );
};

export default DestinationDeals;
