/** @format */

import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const socialMedia = ["FACEBOOK", "TWITTER", "INSTAGRAM", "LINKEDIN"];

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 h-full px-4 md:px-[100px]">
      <div className="w-full md:w-[35%]">
        <p className="mb-3 text-[#141313] italic font-normal">Contact</p>
        <h3 className="text-3xl text-[#141313] font-bold mb-8">
          REACH OUT TO ME
        </h3>
        <p className="font-light mt-6 text-sm">
          249 King St, 05th Floor, Ultra House Building, Melbourne, VIC 3000,
          London.
        </p>
        <p className="mt-3 md:mt-16 font-bold text-xl">+77 022 444 05 05</p>
        <p className="mt-4 font-bold text-xl">jacob360@gmail.com</p>
        <div className="flex  md:justify-between items-center mt-4 md:mt-20 space-x-2">
          {socialMedia.map((media, index) => (
            <p key={index} className="text-sm">
              {media}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[55%] flex flex-col justify-center bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] px-4 md:px-[40px] py-12 mt-8 md:mt-20 mx-auto">
        <h3 className="text-2xl text-white mb-6">ANY PROJECT?</h3>
        <form className="space-y-2 text-white">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-b border-white py-1">
              <input
                type="text"
                className="w-full bg-transparent placeholder-white text-sm focus:outline-none"
                placeholder="NAME"
              />
            </div>
            <div className="border-b border-white py-1">
              <input
                type="email"
                className="w-full bg-transparent placeholder-white text-sm focus:outline-none"
                placeholder="EMAIL"
              />
            </div>
            <div className="border-b border-white py-10 col-span-2">
              <input
                type="text"
                className="w-full bg-transparent placeholder-white text-sm focus:outline-none"
                placeholder="MESSAGE"
              />
            </div>
            <div className="flex gap-2 mb-2 col-span-2">
              <Image
                src="/assets/images/link.svg"
                width={15}
                height={15}
                alt="hero"
              />
              <p className="text-xs">ATTACH FILE</p>
            </div>
          </div>
          <Button text="Submit now" className="mt-4" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
