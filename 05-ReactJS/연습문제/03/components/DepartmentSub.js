import React from "react";
import data from "./myschool";
import { useLocation } from "react-router-dom"; 

const DepartmentSub = () => {
  const {pathname} = useLocation();
  const key = pathname.substring(1);
  const item = data[key];
  
  const itemKey = Object.keys(item);
  console.log(itemKey)

  return <h1>hello</h1>

  // itemKey.map((v, i) => {
  //   return <td key={i}>{item[v]}</td>;
  // })
  

}

export default DepartmentSub;