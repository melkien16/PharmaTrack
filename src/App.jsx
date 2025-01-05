import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;
