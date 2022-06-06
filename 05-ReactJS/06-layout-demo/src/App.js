/**
 * @filename: App.js
 * @description: 레이아웃 구성 컨테이너
 */

import React from "react";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import mq from "./MediaQuery";

const ContentContainer = styled.section`
  max-width: 1200px;
  margin: auto;
  background-color: #fff;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  ${mq.maxWidth("sm")`
        flex-direction: column-reverse;
    `}
`;

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ContentContainer>
        <Side />
        <Routes>
          <Route path="/" export={true} element={<Main />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default App;
