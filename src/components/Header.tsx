import logo from "@assets/icons/brows-with-nana-logo.svg"
import config from "@config/config.json"
import menu from "@config/menu.json"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
const { city, address, phone } = config.contactInfo;

export type NavLink = {
  name: string;
  url: string;
  children?: NavLink[];
};

const {
  logo_text,
  title,
}: {
  logo: string;
  logo_width: any;
  logo_height: any;
  logo_text: string;
  title: string;
} = config.site;
const { main }: { main: Array<NavLink> } = menu;

const browsWithNanaLogo = (
  <a href="/" className="font-logo text-black text-3xl">
    {logo ? (
      <img
        src={logo.src}
        alt={title}
        className=" aspect-square object-contain w-24 md:w-28 lg:w-40"
      />
    ) : logo_text ? (
      logo_text
    ) : (
      title
    )}
  </a>
);

export default function Header({ pathName }: { pathName: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeInfoMenuOpen, setSetstoreInfoMenuOpen] = useState(false);

  return (
    <div className="inset-x-0">
      {/* <div className="relative z-50 shadow">
        <div className="bg-dark text-xl text-white flex flex-col sm:flex-row sm:justify-between sm:h-12 items-center py-1 section-padding-x">
          <div className="flex justify-center space-x-1">
            <img src={locationPinIcon.src} />
            <span>{markdownify(city)}</span>
          </div>
          <button className="flex items-center space-x-1">
            <span> Location + Number</span>
            <img src={chevronDownIcon.src} />
          </button>
        </div>

        <div className="absolute inset-x-0 top-0 text-dark -z-10 bg-primary pt-16 shadow-lg ring-1 ring-gray-900/5 flex flex-col px-5 md:flex-row md:items-center md:justify-around">
          <p dangerouslySetInnerHTML={{ __html: markdownify(config.hours) }} />

          <div className="max-w-7xl py-10 space-y-5">
            <p dangerouslySetInnerHTML={{ __html: markdownify(address) }} />
            <button className="btn" type="button">
              CALL{" "}
              <span dangerouslySetInnerHTML={{ __html: markdownify(phone) }} />
            </button>
          </div>
        </div>
      </div> */}

      <header className="leading-5 inset-x-0  top-0 z-50 section-padding-x absolute py-5">
        <nav
          className="flex items-center justify-between relative isolate"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">{browsWithNanaLogo}</div>
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
              <a
                key={item.name}
                href={item.url}
                className=" leading-6 hover:text-secondary"
              >
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
              {browsWithNanaLogo}
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
                      className="-mx-3 block rounded-lg px-3 py-2 leading-7  hover:bg-gray-50"
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
    </div>
  );
}
