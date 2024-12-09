import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Icons
import { GiMoonBats } from "react-icons/gi";
import { MdSunny } from "react-icons/md";
import { HiMiniHome } from "react-icons/hi2";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

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
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { path: '/', label: 'Home', icon: <HiMiniHome className="w-4 h-auto" /> },
    { path: 'Contact', label: 'Contact', icon: <SiMinutemailer className="w-4 h-auto" /> },
    { path: 'About', label: 'About', icon: <BsFillPersonLinesFill className="w-4 h-auto" /> }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger shadow when scrolled down 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`my-6 z-50 sticky top-0 bg-white dark:bg-slate-900 transition-all duration-300 ${scrolled ? 'md:pt-3' : ''}`}>
      <div className="container mx-auto md:px-4 px-8 py-3 flex md:justify-around justify-between md:px-20 items-center">
        {/* –––––––––––––––––––––––––––– Left Side –––––––––––––––––––––––––––– */}
        <div className='flex space-x-12 items-center justify-center'>
          <Link to="/" className="text-2xl logo-style">
            &#123; ø &#125;
          </Link>
          <div className="flex content-center hidden md:block space-x-4">
            <Link to="/" className="nav-text-style">Home</Link>
            <Link to="/contact" className="nav-text-style">Contact</Link>
            <Link to="/about" className="nav-text-style">About</Link>
          </div>
        </div>
        {/* –––––––––––––––––––––––––––– Right side - Icons –––––––––––––––––––––––––––– */}
        <div className="flex space-x-6">
          <button className="text-indigo-600 dark:text-yellow-500 simple-hover-animation"><MdSunny className="w-6 h-auto" /></button>
          <DropDowMenu links={links} />
        </div>
      </div>
    </nav >
  );
}

// Main App
function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900">
      <Router >
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
