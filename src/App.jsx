import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Icons
import { GiMoonBats } from "react-icons/gi";
import { MdSunny } from "react-icons/md";
import { HiMiniHome } from "react-icons/hi2";
import { FaBoxes } from "react-icons/fa";
import { IoMdMedical } from "react-icons/io";

// Component
import DropDowMenu from './components/DropDowMenu';
import Home from './components/Home';
import Footer from './Footer';

function Contact() {
  return <div className="p-4"></div>;
}

function About() {
  return <div className="p-4"></div>;
}

function NavBar() {
  const links = [
    { path: '/', label: 'Home', icon: <HiMiniHome className="w-4 h-auto" /> },
    { path: 'Contact', label: 'Contact', icon: <FaBoxes className="w-4 h-auto"/> },
    { path: 'About', label: 'About', icon: <IoMdMedical className="w-4 h-auto" /> }
  ]

  return (
    <nav>
      <div className="container mx-auto md:px-4 px-8 py-8 flex justify-between md:px-20 items-center">
        {/* –––––––––––––––––––––––––––– Left Side –––––––––––––––––––––––––––– */}
        <div className='flex space-x-12 items-center justify-center'>
          <Link to="/" className="text-2xl logo-style">
            &#123; El Dani &#125;
          </Link>
          <div className="flex content-center hidden md:block space-x-4">
            <Link to="/" className="nav-text-style">Home</Link>
            <Link to="/projects" className="nav-text-style">Projects</Link>
            <Link to="/about" className="nav-text-style">About</Link>
          </div>
        </div>
        {/* –––––––––––––––––––––––––––– Right side - Icons –––––––––––––––––––––––––––– */}
        <div className="flex space-x-6">
          <button className="text-blue-900 lg:hover:text-yellow-500 simple-hover-animation"><MdSunny className="w-6 h-auto" /></button>
          <DropDowMenu links={links} />
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
