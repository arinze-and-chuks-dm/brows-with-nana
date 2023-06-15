import config from "@config/config.json";
import menu from "@config/menu.json";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

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

const CTA = (
  <a
    href="#"
    className={`w-full border block text-center rounded-md border-black cursor-pointer px-16 py-4 `}
  >
    Book Now
  </a>
);

export default function Header({ pathName }: { pathName: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">{logo}</div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {main.map((item) => (
            <a key={item.name} href={item.url} className="text-sm leading-6 ">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className={`btn-dark border-0`}>
            Book Now
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {logo}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {main.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7  hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="#" className={`btn-dark w-full block border-0`}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
