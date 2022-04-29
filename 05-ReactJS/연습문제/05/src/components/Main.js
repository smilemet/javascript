import React from 'react';
import MainItem from './MainItem';

const Main = () => {
  return (
    <div className='main'>
      <div className="container">
        <MainItem 
          subtit="Title description, Dec 7, 2017"
          longText="Sunt in culpa qui officia deserunt mollit anim id
          est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco."/>
        <br />
        <MainItem 
          subtit="Title description, Sep 2, 2017"
          longText="Sunt in culpa qui officia deserunt mollit anim id
          est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco."/>
      </div>
    </div>
  );
};

export default Main;