import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomeIcon, CogIcon, UserIcon } from '@heroicons/react/outline';
// Dark Theme Icon
import { GiMoonBats } from "react-icons/gi";
// Light Theme Icon
import { MdSunny } from "react-icons/md";
// Nav Menu Icon
import { TiThMenu } from "react-icons/ti";

// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


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

  // function handleSelectMenu() {
  //   return (
  //     <>
  //       <select className="appearance-none flex flex-col justify-center items-center ">
  //         <Link to="/home" className="nav-text-style">Home</Link>
  //         <Link to="/projects" className="nav-text-style">Projects</Link>
  //         <Link to="/about" className="nav-text-style">About</Link>
  //       </select>
  //     </>
  //   )
  // }

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
        <div className="flex space-x-6">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Options
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Account settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    License
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
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
