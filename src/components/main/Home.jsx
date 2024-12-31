import React, { Fragment } from "react";
import Hero from "./Hero";
import About from "./About";
import Feauture from "./Feauture";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Feauture />
      <Testimonial />
    </Fragment>
  );
};

export default Home;
