import React from "react";
import HomeAbout from "../components/home/HomeAbout";
import HomeService from "../components/home/HomeService";
import HomePortfolio from "../components/home/HomePortfolio";
import HomeExplore from "../components/home/HomeExplore";
import HomeBlog from "../components/home/HomeBlog";
import HomeSponsor from "../components/home/HomeSponsor";
import HomeFaqs from "../components/home/HomeFaqs";
import AnimatedSlider from "../animated-slider/AnimatedSlider";
import HomeContact from "../components/home/HomeContact";
import HomeVideo from "../components/home/HomeVideo";
import HomeCustomerSay from "../components/home/HomeCustomerSay";

const Home = () => {
  return (
    <>
      <AnimatedSlider />
      <HomeAbout />
      <HomeService />
      <HomePortfolio />
      <HomeExplore />
      <HomeSponsor />
      <HomeFaqs />
      <HomeBlog />
      <HomeVideo />
      <HomeCustomerSay />
      <HomeContact />
    </>
  );
};

export default Home;
