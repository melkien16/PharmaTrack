import React, { Fragment } from "react";
import Hero from "./Hero";
import About from "./About";
import Feauture from "./Feauture";
import Testimonial from "./Testimonial";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Feauture />
      <Testimonial />
      <SignUp />
    </Fragment>
  );
};

export default Home;
