import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Link as LinkToComponent } from "react-scroll";

const navigation = [
  { name: "Ana Səhifə", href: "hero" },
  { name: "Xüsusiyyətlər", href: "features" },
  { name: "Rəylər", href: "testimonials" },
  { name: "Tez-tez verilən suallar (TVS)", href: "faqs" },
];

export function Header() {
  return (
    <div className="py-2 backdrop-blur-md bg-white/75 shadow-1 z-[999] fixed w-full top-0">
      <Popover>
        <nav
          aria-label="Global"
          className="relative mx-auto flex max-w-7xl items-center justify-between px-6"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link to="/?v=hero">
                <span className="sr-only">Your Company</span>
                {/* <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto sm:h-10"
                /> */}
                <h3 className="font-bold text-4xl text-primary">Zərif.</h3>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <IoIosMenu aria-hidden="true" className="size-8" />
                </PopoverButton>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-10">
              {navigation.map((item) => (
                <Link to={`/?v=${item.href}`}>
                  <a
                    key={item.name}
                    to={`/?v=${item.href}`}
                    className={`font-medium text-gray-500 hover:text-gray-900`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden text-right md:block">
            <span className="inline-flex rounded-md shadow-md ring-1 ring-black/5">
              <Link to="/contact">
                <Button variant="contained" size="large">
                  Əlaqə
                </Button>
              </Link>
            </span>
          </div>
        </nav>

        <PopoverPanel
          focus
          transition
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <h3 className="font-bold text-4xl text-primary">Zərif.</h3>
                {/* <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                /> */}
              </div>
              <div className="-mr-2">
                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close main menu</span>
                  <IoMdClose aria-hidden="true" className="size-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <LinkToComponent
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </LinkToComponent>
              ))}
            </div>
            <Link
              to="/contact"
              className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
            >
              Əlaqə
            </Link>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
}
