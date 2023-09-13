"use client";

import { Fragment, useState } from "react";
import { useAccount } from "wagmi";
import { Menu, Transition } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import ApplicationForm from "./ApplicationForm";
import Link from "next/link";
import PolisLogo from "./icons/PolisLogo";
import { ConnectButton } from "./ConnectButton";
import ThemeButton from "./ThemeButton";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const { isConnected, address } = useAccount();

  return (
    <>
      <nav className="flex items-center justify-between py-4">
        <Link href="/" className="flex gap-4">
          <PolisLogo />
          <span className="text-2xl font-bold text-primary dark:text-white">
            Polis
          </span>
        </Link>
        <div className="hidden lg:flex">
          {isConnected && (
            <div className="flex items-center gap-7">
              <Link
                href={`/applications?user=${address}`}
                className="duration-200 ease-in-out hover:opacity-50"
              >
                My Applications
              </Link>
              <button
                className="duration-200 ease-in-out hover:opacity-50"
                onClick={() => setOpen(true)}
              >
                Submit New Application
              </button>
            </div>
          )}
          <div className="content-center pt-2 pl-2 pr-2">
            <ThemeButton />
          </div>

          <ConnectButton />
        </div>
        <div className="flex items-center z-10 lg:hidden">
          <div className="p-1 text-xs md:text-sm lg:text-base px-2 md:px-3 lg:px-4">
            <ConnectButton />
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white dark:text-gray-300 rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white dark:focus-visible:ring-gray-300 focus-visible:ring-opacity-75">
              <Bars4Icon
                className="w-5 h-12 ml-2 -mr-1 text-black dark:text-gray-300 hover:text-opacity-60"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 origin-top-right bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg w-60 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none">
                <div className="flex flex-col items-center rounded-lg">
                  <Menu.Item>
                    <div className="flex w-full py-4 duration-200 ease-in-out hover:bg-slate-100 dark:hover:bg-gray-700">
                      <Link
                        href={`/applications?user=${address}`}
                        className="w-full text-center dark:text-gray-300"
                      >
                        My Applications
                      </Link>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      className="w-full py-4 duration-200 ease-in-out hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300"
                      onClick={() => setOpen(true)}
                    >
                      Submit New Application
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <ThemeButton />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <ApplicationForm
          modalOpen={open}
          closeModal={() => setOpen(false)}
          isEditMode={false}
        />
      </nav>
    </>
  );
};
