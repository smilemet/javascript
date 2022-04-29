import React, { Fragment } from 'react';

const MainItem = ({title, subtit, image, shortText, longText}) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <h5>{subtit}</h5>
      <div className="fakeimg">{image}</div>
      <p>{shortText}</p>
      <p>{longText}</p>
    </Fragment>
  );
};

MainItem.defaultProps = {
  title: "TITLE HEADING",
  subtit: "Title description",
  image: "Image" ,
  shortText: "Some text.." ,
  longText: "Some text.."
}

export default MainItem;