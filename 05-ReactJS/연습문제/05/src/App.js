import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from './pages/Header';
import Content from './pages/Content';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?
        family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap"
        rel="stylesheet" />
        <style>
          {`
            * {
              font-family: 'Noto Sans KR';
            } 
            body {
              margin: 0;
              padding: 0;
            }
          `}
          </style>
      </Helmet>

      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default App;