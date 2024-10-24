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
import Home from './components/HomePage';
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
      <div className="container mx-auto px-4 py-8 flex justify-between md:px-20 items-center">

        {/* Left Side */}
        <div className='flex space-x-8 items-center justify-center'>
          <Link to="/home" className="text-2xl logo-style">
            &#123; El Dani &#125;
          </Link>
          {/* <div className="space-x-4">
            <Link to="/home" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/projects" className="text-white hover:text-gray-300">Projects</Link>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </div> */}
        </div>

        {/* Right side - Icons */}
        <div className="flex space-x-4">
          <button className="blue-900 hover:text-blue-700">
            <MdSunny className="h-6 w-6" />
          </button>
          <button className="blue-900 hover:text-blue-700">
            <TiThMenu className="h-6 w-6" />
          </button>
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
