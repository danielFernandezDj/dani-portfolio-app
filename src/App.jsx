import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

// Component
import DropDowMenu from './components/DropDowMenu';
import Home from './Home';
import About from './About';
import Footer from './Footer';

function Projects() {
  return <div className="p-4"></div>;
}

function Contact() {
  return <div className="p-4"></div>;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger shadow when scrolled down 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/home', label: 'Home'},
    { path: '/contact', label: 'Contact'},
    { path: '/about', label: 'About'}
  ]

  const scrollToProjectsSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  const scrollToContactSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  return (
    <nav className={`my-6 z-50 sticky top-0 transition-all duration-300 
      ${scrolled ? 'md:pt-3 bg-transparent backdrop-blur-xl' : 'bg-white '}`
    }>
      <div className="container mx-auto md:px-4 px-8 py-3 flex md:justify-around justify-between md:px-20 items-center">
        {/* –––––––––––––––––––––––––––– Left Side –––––––––––––––––––––––––––– */}
        <div className='flex space-x-12 items-center justify-center'>
          <Link to="/" className="text-3xl logo-style simple-hover-animation">
            &#123; ø &#125;
          </Link>
          <div className="flex content-center hidden md:block space-x-4">
            <Link
              to="/home"
              className="nav-text-style"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToProjectsSection('projects')}
              className="nav-text-style"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToContactSection('contact')}
              className="hover:text-blue-500"
            >
              Contact
            </button>
            <Link
              to="/about"
              className="nav-text-style"
            >
              About
            </Link>
          </div>
        </div>
        {/* –––––––––––––––––––––––––––– Right side - Icons –––––––––––––––––––––––––––– */}
        <div className="flex gap-2">
          <a href='https://docs.google.com/document/d/1RQ8uI58cl7uD3EA8v6hDp6M4YfOU0pwrCeszlcx7_eM/edit?usp=sharing' target='_Blank'
            className="flex justify-center content-center gap-2 rounded-md / py-2 px-4 btn-hover-animation lg:block hidden"
          >
            CV ➚
          </a>
          <a href='https://docs.google.com/document/d/1ZdKekTgWMx22usWVeI8DbfDKO-m8UUrzPbLImbZnJSE/edit?usp=sharing' target='_Blank'
            className="flex justify-center items-center gap-2 rounded-md / 
            py-2 px-4 text-slate-800 font-bold bg-transparent border-2 border-slate-800 hover:border-blue-600 hover:text-blue-600 md:block hidden"
          >
            Cover Letter ➚
          </a>
          <DropDowMenu links={links} />
        </div>
      </div>
    </nav >
  );
}

// Main App
function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Router >
        <ScrollToTop />
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
