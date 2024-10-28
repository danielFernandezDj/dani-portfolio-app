import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Menu, MenuItems, MenuItem, Transition, Disclosure } from '@headlessui/react'
import CardsData from "./CardsData";

// Icons
import { TiThMenu } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";

export default function DropDowMenu({ links }) {
  const cardsData = CardsData()
  return (
    <div>
      <Menu as="div" className="flex content-center relative inline-block text-left">
        <div className="flex self-center">
          <Menu.Button>
            <TiThMenu aria-hidden="true" className="text-blue-900 w-6 h-auto md:hidden" />
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
          <Menu.Items className="flex flex-col gap-2 justify-center fixed inset-x-0 top-0 top-14 m-6 w-100">
            <div className="flex justify-center px-1 py-4 divide-x divide-blue-600 rounded-xl bg-blue-900 shadow-lg">
              {links.map((link) => (
                <Menu.Item key={link.path}>
                  <Link
                    to={link.path}
                    className={"flex gap-1 font-bold text-white group  w-full items-center px-2 py-2 text-md"}>
                    {link.icon}
                    {link.label}
                  </Link>
                </Menu.Item>
              ))}
            </div>

            <div className='flex flex-col gap-4 py-4 rounded-xl shadow-lg bg-blue-900'>
              <div className="mx-auto w-full max-w-md rounded-lg">
                <Disclosure defaultOpen>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 text-left text-md font-bold text-white">
                        <span>Projects:</span>
                        <IoIosArrowDown
                          className={`${open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-white`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                          <div className="flex flex-wrap justify-center w-full gap-4">
                            {cardsData.map((card, index) => (
                              <div key={index} className="card-container bg-gradient-to-r from-white to-indigo-100">
                                <div className="flex  justify-between items-center">
                                  <div>
                                    <strong className="text-lg text-blue-500">{card.title}</strong>
                                    <p className="font-extralight">{card.description}</p>
                                  </div>
                                  <a href={card.link} target="_blank" className="p-2 text-white font-bold tracking-wider btn-home-animation">See More</a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </Menu.Items>
        </Transition>

        {/* ------------ Project List ------------
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flex fixed justify-center inset-x-0 top-0 top-40 m-6 py-2 w-100 rounded-lg bg-blue-900 shadow-md ring-1 ring-black/5 focus:outline-none">
            <div className="mx-auto w-full max-w-md rounded-2xl p-2">
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 text-left text-md font-bold text-white">
                      <span>Projects:</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-white`}
                      />
                    </Disclosure.Button>

                    <div className="flex justify-center self-center w-4/5 h-px mx-6 mt-2 | bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    <Transition
                      enter="transition duration-300 ease-in-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        <div className="flex flex-wrap justify-center w-full gap-4">
                          {cardsData.map((card, index) => (
                            <div key={index} className="card-container bg-gradient-to-r from-white to-indigo-100">
                              <div className="flex  justify-between items-center">
                                <div>
                                  <strong className="text-lg text-blue-500">{card.title}</strong>
                                  <p className="font-extralight">{card.description}</p>
                                </div>
                                <a href={card.link} target="_blank" className="p-2 text-white font-bold tracking-wider btn-home-animation">See More</a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </Menu.Items>
        </Transition> */}
      </Menu>
    </div >
  )
}