import React, { Fragment } from 'react';
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
      <Menu
        as="div"
        className="flexcontent-center relative text-left"
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
            <div className="flex justify-center px-1 py-4 rounded-xl bg-slate-800 shadow-lg">
              {links.map((link) => (
                <Menu.Item key={link.path}>
                  <Link
                    to={link.path}
                    className={"flex justify-center gap-1 text-slate-200 w-full px-2 py-2 text-md"}
                  >
                    {link.label}
                  </Link>
                </Menu.Item>
              ))}
            </div>

            {/* ------------ Project List ------------ */}
            <div className='flex flex-col gap-4 py-4 rounded-xl shadow-lg bg-slate-800'>
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex px-4 w-full justify-between text-left text-md text-slate-200">
                      Projects
                      <span className='flex justify-center gap-2'>
                        3
                        <IoIosArrowDown
                          className={`${open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-white`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2 text-slate-200 ">
                      <div className="flex flex-wrap justify-center w-full gap-6 max-h-[50vh] overflow-y-scroll">
                        {cardsData.map((card, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <a
                              href={card.link}
                              target="_blank"
                              key={index}
                            >
                              <img
                                src={card.img}
                                alt="Project Image"
                                className="object-cover rounded-lg"
                              />
                            </a>
                            <div className='grid grid-cols-3'>
                              {/* Col-1 */}
                              <div className='col-span-2'>
                                <strong className="text-xl text-slate-200">
                                  {card.title}
                                </strong>
                                <p className="text-sm text-slate-400 font-light">
                                  {card.description}
                                </p>
                              </div>
                              {/* Col-2 */}
                              <div className='flex p-2 justify-center items-start'>
                                <a
                                  href={card.link}
                                  target="_blank"
                                  className="w-[80%] p-1 text-slate-200 tracking-wider"
                                >
                                  Learn More➚
                                </a>
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