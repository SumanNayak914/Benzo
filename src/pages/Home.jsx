import React from "react";

import BrandCategory from "../components/home/BrandCategory";
// import Poster from "../components/home/Poster";
import BrandDeals from "../components/home/BrandDeals";
import Maaza from "../components/home/Maaza";
import RedBullSlider from "../components/home/RedBull";
import Cocacola from "../components/home/Cocacola";
import Amul from "../components/home/Amul";
import Monster from "../components/home/Monster";
import Sprite from "../components/home/Sprite";
import NewlyLaunched from "../components/home/Newlylaunched";
import HowItWorks from "../components/home/Howit";
import PopularCategories from "../components/PopularCategories";
import ImageSlider from "../components/home/sliderImages ";

const Home = () => {
  return (
    <div>
      <BrandCategory />
      {/* <Poster /> */}
      <ImageSlider/>
      <BrandDeals />
      
      <Maaza />
      <RedBullSlider />
      <Cocacola />
      <Amul />
      <Monster />
      <Sprite />
      <NewlyLaunched />
      <HowItWorks />
      <PopularCategories/>
    </div>
  );
};

export default Home;
