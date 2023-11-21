import { ArrowUp, Globe } from "lucide-react";
import React from "react";

interface Props {}

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-14 py-24 mx-auto">
          <div className="flex flex-wrap justify-between md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                Learn More
              </h2>
              <nav className="list-none mb-10">
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Magic brush
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Individuals
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Photographers
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Marketing</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Developers
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Ecommerce</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Media</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Enterprise
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                Tools & API
              </h2>
              <nav className="list-none mb-10">
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    API Documentation
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Integrations,tools & apps
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Photoshop Extension
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Windows / Mac / linux
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Android App
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Design Templates
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                Support
              </h2>
              <nav className="list-none mb-10">
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Help & FAQs
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Refunds</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Platform Status
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Affiliate program
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Create Automatic Designs
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">
                    Video Background Removal
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Press</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-8 md:flex md:flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="rounded-lg flex justify-center">
                <button className="inline-flex gap-2 text-white bg-blue-600  border-0 py-2 px-6  hover:bg-blue-800 ">
                  <Globe /> English
                </button>
              </div>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap justify-between flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 Ibrahim —
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ibrahim
              </a>
            </p>
            <ul className="hidden md:flex lg:flex items-center justify-end">
              <li>
                <a href="#" className="text-sm font-bold mx-3">
                  Terms of services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-bold mx-3">
                  General Terms and Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-bold mx-3">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-bold mx-3">
                  Cookie policy
                </a>
              </li>
              <li className="bg-blue-600 p-2 text-white">
                <a href="#nav" className="mx-2 flex">
                  <ArrowUp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
