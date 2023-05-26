import config from "@config/config.json";
import menu from "@config/menu.json";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

export type NavLink = {
  name: string;
  url: string;
  children?: NavLink[];
};

const {
  title,
  logo_text,
}: {
  title: string;
  logo_text: string;
} = config.site;
const { main }: { main: Array<NavLink> } = menu;

const logo = (
  <a href="/" className="font-logo text-black text-3xl">
    {logo_text ?? title}
  </a>
);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ pathName }: { pathName: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">{logo}</div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {main.map((item) =>
            !item.children ? (
              <a
                className={` hover:text-black ${
                  pathName === item.url ? "text-black" : ""
                }`}
                href={item.url}
              >
                {item.name.toLocaleUpperCase()}
              </a>
            ) : (
              <Popover className="relative">
                <Popover.Button
                  className={`flex items-center gap-x-1 ${
                    item.children.some((child) => child.url === pathName)
                      ? "text-black"
                      : ""
                  } leading-6 hover:text-black`}
                >
                  {item.name.toUpperCase()}
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none "
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute  -left-8 top-full z-10 mt-3 w-56 bg-white p-2 shadow-lg ring-1 ring-gray-900/">
                    {item.children?.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        className={`block  px-3 py-2 leading-6 ${
                          item.url === pathName ? "text-black" : ""
                        }  hover:text-black`}
                      >
                        {item.name.toUpperCase()}
                      </a>
                    ))}
                  </Popover.Panel>
                </Transition>
              </Popover>
            )
          )}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {logo}
            <button
              type="button"
              className="-m-2.5  p-2."
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {main.map((item) =>
                  item.children ? (
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between py-2 pl-3 pr-3.5 text-base  leading-7 hover:text-black">
                            {item.name.toUpperCase()}
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {item?.children?.map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.url}
                                className={`block py-2 pl-6 pr-3  leading-7  hover:text-black `}
                              >
                                {item.name.toUpperCase()}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <a>{item.name.toUpperCase()}</a>
                  )
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
