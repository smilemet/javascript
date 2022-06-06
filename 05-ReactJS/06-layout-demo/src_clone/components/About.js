import React from "react";
import tablesetting from '../img/tablesetting2.jpg'

const About = () => {
  return (
    <article id="about">
      <div className="left">
        <div className="img1">
          <img src={tablesetting} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="main-container1">
          <div className="art-title">
            <h2>About Catering</h2>
            <p>Tradition since 1889</p>
          </div>
          <div className="art-content">
            <p>
              The Catering was founded in blabla by Mr. Smith in lorem ipsum
              dolor sit amet, consectetur adipiscing elit consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              iruredolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. We only use <span className="highlight">seasonal</span> ingredients.
            </p>
            <p className="blink gray">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod temporincididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
