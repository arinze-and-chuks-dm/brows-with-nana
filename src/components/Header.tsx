import config from "@config/config.json";
import menu from "@config/menu.json";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

export type NavLink = {
  name: string;
  url: string;
  children?: NavLink[];
};

const {
  logo,
  logo_width,
  logo_height,
  logo_text,
  title,
}: {
  logo: string;
  logo_width: any;
  logo_height: any;
  logo_text: string;
  title: string;
} = config.site;
const { address } = config.contactinfo;
const { main }: { main: Array<NavLink> } = menu;

const browsWithNanaLogo = (
  <a href="/" className="font-logo text-black text-3xl">
    {logo ? (
      <img
        width={150}
        height={150}
        src={logo}
        alt={title}
        // style={{
        //   height: logo_height.replace("px", "") + "px",
        //   width: logo_width.replace("px", "") + "px",
        // }}
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

  return (
    <div className="inset-x-0">
      <div className=" bg-[#8F7883] h-12 text-xl text-white flex justify-between items-center">
        <div className="flex justify-center space-x-1">
          <img src="/images/location-pin.svg" />
          <span set:html={markdownify(address)} />
        </div>
        <div>Location+Number</div>
      </div>
      <header className="leading-5  top-0 z-50 section text-[#8E7982]">
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
                className=" leading-6 hover:text-[#83B197]"
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
