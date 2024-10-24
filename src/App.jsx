import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomeIcon, CogIcon, UserIcon } from '@heroicons/react/outline';
// Dark Theme Icon
import { GiMoonBats } from "react-icons/gi";
// Light Theme Icon
import { MdSunny } from "react-icons/md";
// Nav Menu Icon
import { TiThMenu } from "react-icons/ti";


// Component Pages
import Home from './components/Home';
import Footer from './Footer';

function Projects() {
  return <div className="p-4"></div>;
}

function About() {
  return <div className="p-4"></div>;
}

// Navigation Bar
function NavBar() {
  return (
    <nav>
      <div className="container mx-auto md:px-4 px-8 py-8 flex justify-between md:px-20 items-center">
        {/* –––––––––––––––––––––––––––– Left Side –––––––––––––––––––––––––––– */}
        <div className='flex space-x-12 items-center justify-center'>
          <Link to="/home" className="text-2xl logo-style">
            &#123; El Dani &#125;
          </Link>
          <div className="flex content-center hidden md:block space-x-4">
            <Link to="/home" className="nav-text-style">Home</Link>
            <Link to="/projects" className="nav-text-style">Projects</Link>
            <Link to="/about" className="nav-text-style">About</Link>
          </div>
        </div>

        {/* –––––––––––––––––––––––––––– Right side - Icons –––––––––––––––––––––––––––– */}
        <div className="flex space-x-4">
          <button className="text-blue-900 lg:hover:text-yellow-500 simple-hover-animation"><MdSunny className="w-6 h-auto" /></button>
          <button className="text-blue-900 md:hidden"><TiThMenu className="w-6 h-auto" /></button>
        </div>
      </div>
    </nav>
  );
}

// Main App
function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Router >
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
