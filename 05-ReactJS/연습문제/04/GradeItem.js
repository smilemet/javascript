import React from "react";
import PropTypes from "prop-types";

const GradeItem = ({name, grade, sex, kor, eng, math, sci}) => {
  const total = kor + eng + math + sci;
  const avg = parseInt(total/4);

  return (
    <tr>
      <td>{name}</td>
      <td>{grade}</td>
      <td>{sex}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{math}</td>
      <td>{sci}</td>
      <td>{total}</td>
      <td>{avg}</td>
    </tr>
  );
}

GradeItem.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number,
  sex: PropTypes.string,
  kor: PropTypes.number,
  eng: PropTypes.number,
  math: PropTypes.number,
  sci: PropTypes.number,
}

GradeItem.defaultProps = {
  kor: 0,
  eng: 0,
  math: 0,
  sci: 0,
}

export default GradeItem;