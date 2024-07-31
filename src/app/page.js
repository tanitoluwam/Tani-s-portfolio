/** @format */
"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import "./globals.css";
import { useRouter } from "next/navigation";
 

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="px-[140px] h-screen md:overflow-hidden relative">
      <div className="flex items-center justify-center md:h-[100vh]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full mt-10 md:mt-0">
          <div className="flex flex-col items-center md:items-start md:w-1/2 relative">
            <p className="text-md text-black text-7xl mb-2 font-light leading-none ">
              MY NAME <br /> IS{" "}
              <span className="font-bold">JACOB JONES...</span>
            </p>
            <div className="absolute z-[-1] top-[-1%] -left-8 transform rotate-30">
              <Image
                src="/assets/images/heroLn.svg"
                width={150}
                height={150}
                alt="hero"
              />
            </div>
            <p className="md:mb-12 mb-8 md:mt-3 mt-5 text-xl font-light md:text-start text-center">
              <span className="font-bold italic ">Product Designer</span> based
              in <span className="font-bold italic">London</span>
            </p>
            <Button onClick={handleClick} />
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 md:mt-14 mt-8">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Image
                  src="/assets/images/call.svg"
                  width={30}
                  height={30}
                  alt="call"
                />
                <p className="text-[#141313] font-bold">+77 022 444 05 05</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/mail.svg"
                  width={30}
                  height={30}
                  alt="mail"
                />
                <p className="text-[#141313] font-bold italic">
                  +jacob360@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex hidden md:justify-end md:w-1/2 items-center ml-auto mr-10 relative">
            <Image
              src="/assets/images/hero.png"
              width={600}
              height={600}
              alt="hero"
            />
            <div className="absolute z-[1] top-[75%] right-[70px] ">
              <Image
                src="/assets/images/Elements.svg"
                width={50}
                height={50}
                alt="elements"
              />
            </div>
            <div className="absolute z-[1] top-[65%] left-[40px] ">
              <Image
                src="/assets/images/group.svg"
                width={18}
                height={18}
                alt="group"
              />
            </div>
            <div className="absolute z-[1] top-[5%] right-[100px] ">
              <Image
                src="/assets/images/group.svg"
                width={18}
                height={18}
                alt="group"
              />
            </div>
          </div>

          <div className="md:block absolute bottom-50 right-20 sm:hidden hidden">
            <div className="mb-5">
              <Image
                src="/assets/images/ig.svg"
                width={30}
                height={30}
                alt="ig"
              />
            </div>
            <div className="mb-5">
              <Image
                src="/assets/images/bball.svg"
                width={30}
                height={30}
                alt="bball"
              />
            </div>
            <div className="mb-5">
              <Image
                src="/assets/images/fb.svg"
                width={30}
                height={30}
                alt="fb"
              />
            </div>
            <div className="h-32 w-[1px] bg-[#b8b8b8] ml-4 items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
