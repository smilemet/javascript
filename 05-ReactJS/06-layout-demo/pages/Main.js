import React from "react";

import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import titleimg from "../img/hamburger.jpg";

import "../css/main.scss";

const Main = () => {
  return (
    <main>
      <section className="section-title">
        <img src={titleimg} alt="햄버거가 차려진 사진" />
        <h1>Le Catering</h1>
      </section>

      <section className="section-content">
        <About />
        <hr />
        <Menu />
        <hr />
        <Contact />
      </section>
    </main>
  );
};

export default Main;
