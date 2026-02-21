import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Projects from './components/ProjectsData';
import About from './sections/About';
import Work from './sections/Work';
import CTA from './components/CTA';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Work/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<CTA/>} />
        
      </Routes>
      <Footer />


    </>
  )
}

export default App

