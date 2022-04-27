import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>성적표</h1>
      <nav>
        <Link to="/grade_table/1">1학년</Link> | 
        <Link to="/grade_table/2">2학년</Link> | 
        <Link to="/grade_table/3">3학년</Link> | 
        <Link to="/grade_table/4">4학년</Link> | 
      </nav>
      <hr/>
      <Routes>
        <Route path="/grade_table/:grade" element={<GradeItem/>}/>
      </Routes>

    </div>
  )
}

export default App;