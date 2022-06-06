import React from 'react';

const MenuItem = ({title, text}) => {
  return (
    <div className="menu-item">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

MenuItem.defaultProps = {
  title: "Menu Name",
  text: "Some text..."
}

export default MenuItem;