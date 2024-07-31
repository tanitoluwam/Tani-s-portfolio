/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 mt-20 flex flex-col justify-center">
      <p className="mb-3 text-[#141313] italic font-normal">Service</p>
      <h3 className="text-3xl text-[#141313] font-bold mb-6 md:mb-4">
        MY SPECIALTIES
      </h3>
      <div className="mt-4 md:mt-8">
        <ul>
          <li
            className={`border-b border-gray-300 py-6 ${
              activeIndex === 0 ? "custom-li mobile-app-li" : "custom-li"
            }`}>
            <div
              className="md:flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(0)}>
              <div className="flex md:block">
                <h3
                  className={`text-2xl font-bold w-full  ${
                    activeIndex === 0
                      ? "bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text"
                      : "text-black"
                  }`}>
                  WEB DESIGN
                </h3>
                <span className="text-xl font-light block md:hidden">
                  {activeIndex === 0 ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="flex items-center">
                {activeIndex === 0 && (
                  <p className="font-light text-sm mt-4">
                    You can customize a template or make your own from scratch,
                    <br /> with an immersive library at your disposal. You can
                    customize a template
                  </p>
                )}
                <span className="text-xl font-light hidden md:block">
                  {activeIndex === 0 ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
            </div>
          </li>
          <li
            className={`border-b border-gray-300 py-6 ${
              activeIndex === 1 ? "custom-li mobile-app-li" : "custom-li"
            }`}>
            <div
              className="md:flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(1)}>
              <div className="flex md:block">
                <h3
                  className={`text-2xl font-bold w-full  ${
                    activeIndex === 1
                      ? "bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text"
                      : "text-black"
                  }`}>
                  UI/UX
                </h3>
                <span className="text-xl font-light block md:hidden">
                  {activeIndex === 1 ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="flex items-center">
                {activeIndex === 1 && (
                  <p className="font-light text-sm mt-4">
                    You can customize a template or make your own from scratch,
                    <br /> with an immersive library at your disposal. You can
                    customize a template
                  </p>
                )}
                <span className="text-xl font-light hidden md:block">
                  {activeIndex === 1 ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
            </div>
          </li>
          <li
            className={`border-b border-gray-300 py-6 ${
              activeIndex === 2 ? "custom-li mobile-app-li" : "custom-li"
            }`}>
            <div
              className="md:flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(2)}>
              <div className="flex md:block">
                <h3
                  className={`text-2xl font-bold w-full  ${
                    activeIndex === 2
                      ? "bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text"
                      : "text-black"
                  }`}>
                  MOBILE APPLICATION
                </h3>
                <span className="text-xl font-light block md:hidden">
                  {activeIndex === 2 ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="flex items-center">
                {activeIndex === 2 && (
                  <div className="font-light text-base">
                    <Image
                      src="/assets/images/services.svg"
                      width={300}
                      height={300}
                      alt="Behance"
                    />
                    <p className="mt-4 text-sm">
                      You can customize a template or make your own from
                      scratch, <br /> with an immersive library at your
                      disposal. You can customize a template
                    </p>
                  </div>
                )}
                <span className="text-xl font-light hidden md:block">
                  {activeIndex === 2 ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
            </div>
          </li>
          <li
            className={`border-b border-gray-300 py-6 ${
              activeIndex === 3 ? "custom-li mobile-app-li" : "custom-li"
            }`}>
            <div
              className="md:flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(3)}>
              <div className="flex md:block">
                <h3
                  className={`text-2xl font-bold w-full  ${
                    activeIndex === 3
                      ? "bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text"
                      : "text-black"
                  }`}>
                  USER RESEARCH
                </h3>
                <span className="text-xl font-light  block md:hidden">
                  {activeIndex === 3 ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="flex items-center">
                {activeIndex === 3 && (
                  <p className="font-light text-sm mt-4">
                    You can customize a template or make your own from scratch,
                    <br /> with an immersive library at your disposal. You can
                    customize a template
                  </p>
                )}
                <span className="text-xl font-light hidden md:block">
                  {activeIndex === 3 ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;

//  <div className="flex items-center">
//    {activeIndex === 2 && (
//  <div className="font-light text-base">
//    <Image
//      src="/assets/images/services.svg"
//      width={300}
//      height={300}
//      alt="Behance"
//    />
//    <p className="mt-4 text-sm">
//      You can customize a template or make your own from scratch, <br /> with
//      an immersive library at your disposal. You can customize a template
//    </p>
//  </div>
//    )}
//    <span className="text-2xl">
//      {activeIndex === 2 ? <FaMinus /> : <FaPlus />}
//    </span>
//  </div>;
