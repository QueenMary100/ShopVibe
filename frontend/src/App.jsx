import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx'

//For Navigation
import{Routes, Route, Link} from 'react-router-dom'

function App(){
  return(
    <div>
      <nav>
        <Link to="/">  Home</Link>
        <Link to="/about">  About</Link>
        <Link to="/contact">  Contact</Link>
        <Link to="/services">  Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </div>

  );
}

export default App;