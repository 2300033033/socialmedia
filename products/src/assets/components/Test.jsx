import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loginpage from './Loginpage';
import Signup from './Signup';


const Test = () => {
  return (
    <Router>
      
         <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
     
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
      
    </Router>
  );
};

export default Test;