import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

interface Props {}

const Navbar = () => {
  return (
    <div id="nav">
      <div className="flex items-center justify-between p-6 mx-auto">
        <ul className="flex items-center p-0 m-0">
          <li className="mx-4">
            <a href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Logo" width={50} height={43} />
              <h1 className="custom_gray font-bold text-4xl mx-4">
                remove <span className="text-gray-400">bg</span>
              </h1>
            </a>
          </li>
          <li className="mx-4">
            <a href="/" className="text-gray-600">
              Remove background
            </a>
          </li>
          <li className="mx-4">
            <a href="/working" className="text-gray-600">
              How it works ?
            </a>
          </li>
          <li className="mx-4">
            <a href="/pricing" className="text-gray-600">
              Pricing
            </a>
          </li>
        </ul>
        <div className="login mx-4">
          {" "}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
