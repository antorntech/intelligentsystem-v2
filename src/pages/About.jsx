import React from "react";
import PageHeader from "../shared/PageHeader";
import HomeExplore from "../components/home/HomeExplore";
import HomeRoadmap from "../components/home/HomeRoadmap";

const About = () => {
  return (
    <>
      <PageHeader title="About" />
      <HomeExplore />
      <HomeRoadmap />
    </>
  );
};

export default About;
