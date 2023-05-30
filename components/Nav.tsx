import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars4Icon, CheckIcon } from "@heroicons/react/24/outline";
import NewApplication from "./NewApplication";
import Link from "next/link";
import PolisLogo from "./icons/PolisLogo";
import { ConnectButton } from "./ConnectButton";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-4">
        <Link href="/" className="flex gap-4">
          <PolisLogo />
          <span className="font-bold text-primary text-2xl">Polis</span>
        </Link>
        <div className="hidden lg:block">
          <div className="flex gap-7 items-center">
            <Link
              href="/application"
              className="hover:opacity-50 ease-in-out duration-200"
            >
              My Application
            </Link>
            <button
              className="hover:opacity-50 ease-in-out duration-200"
              onClick={() => setOpen(true)}
            >
              Submit New Application
            </button>
            <ConnectButton />
          </div>
        </div>
        <div className="z-10 lg:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <Bars4Icon
                className="w-5 h-12 ml-2 -mr-1 text-black hover:text-opacity-60"
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
              <Menu.Items className="absolute right-0 w-60 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="flex flex-col items-center rounded-lg">
                  <Menu.Item>
                    <div className="flex w-full py-4 hover:bg-slate-100 ease-in-out duration-200">
                      <Link href="/application" className="w-full text-center">
                        My Application
                      </Link>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      className="w-full py-4 hover:bg-slate-100 ease-in-out duration-200"
                      onClick={() => setOpen(true)}
                    >
                      Submit New Application
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <ConnectButton />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <NewApplication modalOpen={open} closeModal={() => setOpen(false)} />
      </nav>
    </>
  );
};
