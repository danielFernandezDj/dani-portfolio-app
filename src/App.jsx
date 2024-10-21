import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomeIcon, CogIcon, UserIcon } from '@heroicons/react/outline';

// Component Pages
import Home from './components/LandingPage';
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
          <Link to="/home" className="text-black text-2xl font-bold">
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
          <button className="text-black hover:text-gray-300">
            <HomeIcon className="h-6 w-6" />
          </button>
          <button className="text-black hover:text-gray-300">
            <CogIcon className="h-6 w-6" />
          </button>
          <button className="text-black hover:text-gray-300">
            <UserIcon className="h-6 w-6" />
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
