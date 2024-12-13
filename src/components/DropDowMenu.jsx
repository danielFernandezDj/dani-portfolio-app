import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition, Disclosure, MenuItem } from '@headlessui/react';
import CardsData from "./CardsData";

// Icons
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

export default function DropDowMenu() {
  const cardsData = CardsData();

  const scrollToContactSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  return (
    <div>
      <Menu as="div" className="flex content-center relative text-left">
        <div className="flex self-center">
          <Menu.Button>
            {({ open }) =>
              open ? (
                <RiMenuFold2Line aria-hidden="true" className="text-red-600 stroke-2 w-6 h-auto md:hidden" />
              ) : (
                <RiMenuFoldLine aria-hidden="true" className="text-blue-600 stroke-2 w-6 h-auto md:hidden" />
              )
            }
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
          <Menu.Items className="flex flex-col gap-2 fixed inset-x-0 top-0 top-14 mx-6 mt-8 w-100">
            <div className="flex justify-center px-1 py-4 rounded-xl bg-slate-300 shadow-lg">
              <Menu.Item>
                {({ close }) => (
                  <Link
                    to="/"
                    onClick={close}
                    className={"flex justify-center gap-1 text-slate-800 w-full px-2 py-2 text-lg"}
                  >
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ close }) => (
                  <button
                    onClick={() => {
                      scrollToContactSection('contact');
                      close();
                    }}
                    className={"flex justify-center gap-1 text-slate-800 w-full px-2 py-2 text-lg"}
                  >
                    Contact
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ close }) => (
                  <Link
                    to="/about"
                    onClick={close}
                    className={"flex justify-center gap-1 text-slate-800 w-full px-2 py-2 text-lg"}
                  >
                    About
                  </Link>
                )}
              </Menu.Item>
            </div>

            <div className="flex flex-col gap-4 py-4 rounded-xl shadow-lg bg-slate-300">
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex px-4 w-full justify-between text-left text-lg text-slate-800">
                      Projects
                      <span className="flex justify-center gap-2">
                        3
                        <IoIosArrowDown
                          className={`${open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-slate-800`}
                        />
                      </span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2 text-slate-800">
                      <div className="flex flex-wrap justify-center w-full gap-6 max-h-[55vh] overflow-y-scroll scrollbar-hide">
                        {cardsData.map((card, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <Menu.Item>
                              {({ close }) => (
                                <Link
                                  to={card.link}
                                  onClick={close}
                                  className="object-cover rounded-lg"
                                >
                                  <img src={card.img} alt="Project Image" />
                                </Link>
                              )}
                            </Menu.Item>
                            <div className="grid grid-cols-3">
                              <div className="col-span-2">
                                <Menu.Item>
                                  {({ close }) => (
                                    <Link
                                      to={card.link}
                                      onClick={close}
                                      className="text-xl font-bold text-slate-800"
                                    >
                                      {card.title}
                                    </Link>
                                  )}
                                </Menu.Item>
                                <p className="text-sm text-slate-800 font-light">{card.description}</p>
                              </div>
                              <div className="flex p-2 justify-center items-start">
                                <MenuItem>
                                  {({ close }) => (
                                    <Link
                                      to={card.link}
                                      onClick={close}
                                      className="w-[80%] p-1 text-slate-800 tracking-wider"
                                    >
                                      Learn More➚
                                    </Link>
                                  )}
                                </MenuItem>
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
  );
}
