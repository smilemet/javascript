import React, { Fragment } from "react";

import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

import "./css/Normalize.css";
import "./css/style.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
