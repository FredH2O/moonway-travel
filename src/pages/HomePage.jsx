import HeroSection from "../components/HeroSection";
import MarqueeExample from "../components/MarqueeBanner";
import Newsletter from "../components/Newsletter";
import Tips from "../components/Tips";
import TrendingPlaces from "../components/TrendingPlaces";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrendingPlaces />
      <Newsletter />
      <Tips />
      <MarqueeExample />
    </>
  );
};

export default HomePage;
