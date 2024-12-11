import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import CardsData from "./CardsData";

// Icons
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

export default function DropDowMenu({ links }) {
  const cardsData = CardsData()

  return (
    <div>
      <Menu as="div" className="flex content-center relative inline-block text-left">
        <div className="flex self-center">
          <Menu.Button>
            {({ open }) => ( 
              open ? (
                <RiMenuFold2Line aria-hidden="true" className="text-blue-600 stroke-2 w-6 h-auto md:hidden" />
              ) : (
                <RiMenuFoldLine aria-hidden="true" className="text-indigo-600 stroke-2 w-6 h-auto md:hidden" />
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
          <Menu.Items className="flex flex-col gap-2 justify-center fixed inset-x-0 top-0 top-14 m-6 w-100">
            <div className="flex justify-center px-1 py-4 divide-x divide-blue-600 rounded-xl bg-blue-900 shadow-lg">
              {links.map((link) => (
                <Menu.Item key={link.path}>
                  <Link
                    to={link.path}
                    className={"flex justify-center gap-1 font-bold text-white w-full px-2 py-2 text-md dark:text-slate-200"}>
                    {link.icon}
                    {link.label}
                  </Link>
                </Menu.Item>
              ))}
            </div>

            {/* ------------ Project List ------------ */}
            <div className='flex flex-col gap-4 py-4 rounded-xl shadow-lg bg-blue-900'>
              <div className="mx-auto w-full max-w-md rounded-lg">
                <Disclosure defaultOpen>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 text-left text-md font-bold text-white">
                        <span>Projects</span>
                        <IoIosArrowDown
                          className={`${open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-white`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        <div className="flex flex-wrap justify-center w-full gap-4">
                          {cardsData.map((card, index) => (
                            <div key={index} className="card-container bg-gradient-to-r from-white to-indigo-100 dark:from-slate-300   dark:from-slate-900 dark:to-slate-900">
                              <div className="flex  justify-between items-center">
                                <div>
                                  <strong className="text-lg text-blue-500">{card.title}</strong>
                                  <p className="font-extralight dark:text-slate-300">{card.description}</p>
                                </div>
                                <a href={card.link} target="_blank" className="p-2 text-white font-bold tracking-wider btn-home-animation dark:text-slate-200">See More</a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>


    </div >
  )
}