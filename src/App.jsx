import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Resume from './Components/Resume';



const App = () => {


  return (
    <Router >  {/* Only use BrowserRouter here */}
      <Navbar />  {/* Display Navbar on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
       

        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume/>} />

      </Routes>
     
    </Router>
    
  );
};

export default App;
