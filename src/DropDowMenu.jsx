import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'

// Icons
import { Fragment, useEffect, useRef, useState } from 'react'
import { TiThMenu } from "react-icons/ti";

import { HiMiniHome } from "react-icons/hi2";
import { FaBoxes } from "react-icons/fa";
import { IoMdMedical } from "react-icons/io";

export default function DropDowMenu({ links }) {
  let testing = true;

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
          <Menu.Items className="flex fixed justify-center inset-x-0 top-0 top-14 m-6 py-6 w-100 rounded-lg bg-blue-900 shadow-md ring-1 ring-black/5 focus:outline-none">
            <div className="flex justify-between px-1 py-1 divide-x divide-blue-600">
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
          </Menu.Items>
        </Transition>
      </Menu>
    </div >
  )
}