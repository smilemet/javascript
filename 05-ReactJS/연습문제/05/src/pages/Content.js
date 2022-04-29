import React from 'react';
import styled from 'styled-components';

import Side from '../components/Side';
import Main from '../components/Main';

const ContentContainer = styled.section`
  max-width: 1200px;
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  .side {
    width: 360px;
    flex: none;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    .fakeimg:first-of-type {height: 200px;}
  }

  .main {
    flex: 0 1 auto;
    background-color: white;
    border-right: 1px solid #d5d5d5;
    .fakeimg {height: 200px;}
  }

  .container {
    padding: 20px;
  }
  
  .fakeimg {
    background-color: #aaa;
    width: auto;
    padding: 20px;
  }
`

const Content = () => {
  return (
    <ContentContainer className='content'>
      <Side />
      <Main />
    </ContentContainer>
  );
};

export default Content;