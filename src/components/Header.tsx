import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className="bg-black text-white p-2 hidden lg:flex flex-row justify-end items-center space-x-5 pr-20">
        <span className="">HCLTech</span>
        <span
          onClick={() => setShowDropdown(!showDropdown)}
          className="relative"
        >
          About
        </span>
        {showDropdown && (
          <div className="bg-white text-black z-1 border border-gray-300 absolute top-10 right-16 rounded-lg text-lg flex flex-col justify-start items-start">
            <span className="bg-white hover:bg-gray-200 px-2 py-1 w-full indent-2">
              <span className="text-lg flex flex-row justify-center items-center space-x-1 group">
                <span className="">Brands</span>{" "}
                <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <BsArrowRight />
                </span>
              </span>
            </span>
            <span className="bg-white hover:bg-gray-200 px-2 py-1 w-full indent-2">
              <span className="text-lg flex flex-row justify-center items-center space-x-1 group">
                <span className="">Careers</span>{" "}
                <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <BsArrowRight />
                </span>
              </span>
            </span>
            <span className="bg-white hover:bg-gray-200 px-2 py-1 w-full indent-2">
              <span className="text-lg flex flex-row justify-center items-center space-x-1 group">
                <span className="">Life Here</span>{" "}
                <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <BsArrowRight />
                </span>
              </span>
            </span>
            <span className="bg-white hover:bg-gray-200 px-2 py-1 w-full indent-2">
              <span className="text-lg flex flex-row justify-center items-center space-x-1 group">
                <span className="">Health Care</span>{" "}
                <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <BsArrowRight />
                </span>
              </span>
            </span>
            <span className="bg-white hover:bg-gray-200 px-2 py-1 w-full indent-2">
              <span className="text-lg flex flex-row justify-center items-center space-x-1 group">
                <span className="">Foundations</span>{" "}
                <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <BsArrowRight />
                </span>
              </span>
            </span>
          </div>
        )}

        <span className="relative">EN</span>
      </div>
    </>
  );
};

export default Header;
