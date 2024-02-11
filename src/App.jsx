import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './footer';

const App = () => {
  return (
    <>
  
    <Navbar/>
   
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/service" element={<Service />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
