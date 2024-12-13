import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition, Disclosure, MenuItem, MenuItems } from '@headlessui/react'
import CardsData from "./CardsData";

// Icons
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";


export default function DropDowMenu() {
  const cardsData = CardsData()

  const scrollToContactSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  return (
    <div>
      <Menu
        as="div"
        className="flex content-center relative text-left"
      >
        <div className="flex self-center">
          <Menu.Button>
            {({ open }) => (
              open ? (
                <RiMenuFold2Line aria-hidden="true" className="text-red-600 stroke-2 w-6 h-auto md:hidden" />
              ) : (
                <RiMenuFoldLine aria-hidden="true" className="text-blue-600 stroke-2 w-6 h-auto md:hidden" />
              )
            )}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* ------------ Menu Content ------------ */}
          <Menu.Items className="flex flex-col gap-2 fixed inset-x-0 top-0 top-14 mx-6 mt-8 w-100">
            <div className="flex justify-center px-1 py-4 rounded-xl bg-slate-300 shadow-lg">
              <MenuItem>
                <Link
                  to="/"
                  className={"flex justify-center gap-1 text-slate-800 w-full px-2 py-2 text-lg"}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={() => scrollToContactSection('contact')}
                  className={"flex justify-center gap-1 text-slate-800 w-full px-2 py-2 text-lg"}
                >
                  Contact
                </button>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/about"
                  className={"flex justify-center gap-1 text-slate-800 w-full px-2 py-2 text-lg"}
                >
                  About
                </Link>
              </MenuItem>
            </div>

            {/* ------------ Project List ------------ */}
            <div className='flex flex-col gap-4 py-4 rounded-xl shadow-lg bg-slate-300'>
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex px-4 w-full justify-between text-left text-lg text-slate-800">
                      Projects
                      <span className='flex justify-center gap-2'>
                        3
                        <IoIosArrowDown
                          className={`${open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-slate-800`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2 text-slate-800 ">
                      <div className="flex flex-wrap justify-center w-full gap-6 max-h-[55vh] overflow-y-scroll scrollbar-hide">
                        {cardsData.map((card, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <Link
                              to={card.link}
                              key={index}
                              target='_blank'
                            >
                              <img
                                src={card.img}
                                alt="Project Image"
                                className="object-cover rounded-lg"
                              />
                            </Link>
                            <div className='grid grid-cols-3'>
                              {/* Col-1 */}
                              <div className='col-span-2'>
                                <strong className="text-xl text-slate-800">
                                  <Link
                                    to={card.link}
                                    target='_blank'
                                  >
                                    {card.title}
                                  </Link>
                                </strong>
                                <p className="text-sm text-slate-800 font-light">
                                  {card.description}
                                </p>
                              </div>
                              {/* Col-2 */}
                              <div className='flex p-2 justify-center items-start'>
                                <Link
                                  to={card.link}
                                  target='_blank'
                                  className="w-[80%] p-1 text-slate-800 tracking-wider"
                                >
                                  Learn More➚
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>


    </div >
  )
}