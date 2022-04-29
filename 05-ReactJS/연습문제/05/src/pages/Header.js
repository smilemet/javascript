import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  .header .jumbotron {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;
    h1 {font-size: 40px;}
  }

  .navbar {
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;

    div {
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
    }

    div a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 20px;
      text-decoration: none;
    }

    a.right {
      margin-left: auto;
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer className='header'>
      <header className='header'>
        <div className='jumbotron'>
          <h1>My Website</h1>
          <p>A <b>responsive</b> website created by me.</p>
        </div>
      </header>
      <nav className='navbar'>
        <div>
          <NavLink to="#">Home</NavLink>
          <NavLink to="#">Link1</NavLink>
          <NavLink to="#">Link2</NavLink>
          <NavLink to="#" className="right">Link3</NavLink>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;