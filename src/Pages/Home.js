import React from "react";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Gallery from "../components/Gallery";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Gallery />
      <Collections />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default Home;
