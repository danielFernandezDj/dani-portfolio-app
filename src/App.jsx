import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  // 💡 Import useRouteError for detailed error information
  useRouteError
} from 'react-router-dom';
import ErrorPage from './ErrorPage';

// Component
import DropDowMenu from './components/DropDowMenu';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Footer';
import TLCLicensing from './pages/TLCLicensing';
import ArtisticEchoes from './pages/ArtisticEchoes';

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

  const scrollToProjectsSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  const scrollToContactSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  return (
    <nav className={`z-50 sticky top-0 transition-all duration-300 bg-slate-50 
      ${scrolled ? 'shadow-2xl shadow-slate-200/40' : 'shadow-none'}`
    }>
      <div className="container flex md:justify-around justify-between items-center mx-auto md:px-4 px-8 py-3 md:px-20">
        {/* –––––––––––––––––––––––––––– Left Side –––––––––––––––––––––––––––– */}
        <div className='flex grow-1 md:justify-center justify-start w-full space-x-12 items-center'>
          <Link to="/" className="text-3xl logo-style simple-hover-animation">
            &#123; ø &#125;
          </Link>
          <div className="flex content-center hidden md:block space-x-4">
            <Link
              to="/"
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
        <div className='flex w-full grow-1 justify-end'>
          <a href='https://docs.google.com/document/d/1RQ8uI58cl7uD3EA8v6hDp6M4YfOU0pwrCeszlcx7_eM/edit?usp=sharing' target='_Blank'
            className="flex justify-center content-center gap-2 rounded-md / mx-28 py-2 px-4 btn-hover-animation md:block hidden"
          >
            Resume ➚
          </a>
        </div>

        <DropDowMenu />
      </div>
    </nav >
  );
}

// 🚨 NEW: Error Boundary Component
// This component catches errors in child components and routes
function ErrorBoundary() {
  // useRouteError provides detailed error information from React Router
  const error = useRouteError();

  return (
    <div className="error-container">
      {/* Render custom error page with dynamic error messages */}
      <ErrorPage
        // Dynamically set error title based on error type
        title={
          error.status === 404
            ? "Page Not Found"
            : "Unexpected Error Occurred"
        }
        // Provide more context about the error
        message={
          error.status === 404
            ? "The page you're looking for doesn't exist."
            : error.message || "An unexpected error prevented the page from loading."
        }
      />
    </div>
  );
}

// Main App Component
function App() {
  return (
    <main className="flex flex-col content-center bg-slate-50">
      <Router>
        <ScrollToTop />
        <NavBar />

        <div className="flex-grow">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tlc-licensing" element={<TLCLicensing />} />
            <route path="/artistic-echoes" element={<ArtisticEchoes />} />

            {/* 💥 Error Handling Route */}
            {/* This route will catch and display errors */}
            <Route
              path="/error"
              element={<ErrorPage />}
            />

            {/* 🛡️ Catch-All Error Boundary */}
            <Route
              path="*"
              element={<ErrorBoundary />}
            />
          </Routes>
        </div>

        <Footer />
      </Router>
    </main>
  );
}

export default App;