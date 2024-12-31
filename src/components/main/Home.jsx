import React, { Fragment } from "react";
import Hero from "./Hero";
import About from "./About";
import Feauture from "./Feauture";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Feauture />
    </Fragment>
  );
};

export default Home;
