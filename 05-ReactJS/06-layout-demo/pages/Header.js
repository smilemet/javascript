import React from "react";

import "../css/header.scss";

const Header = () => {
  return (
    <header>
      <div className="inner">
        <div className="title">
          <a href="/">Gourmet au Catering</a>
        </div>
        <nav>
          <ul className="nav-item">
            {/* 단순 페이지 내 이동이므로 NavLink 사용하지 않음 */}
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
