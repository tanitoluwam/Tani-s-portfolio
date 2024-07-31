/** @format */

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const About = () => {
  return (
    <section className="overflow-y-scroll h-screen element-without-scrollbar">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[80px]">
        <div className="flex flex-col lg:flex-row mt-20 items-center justify-between gap-6">
          <div className="relative w-full lg:w-[30%]">
            <p className="italic font-medium">Nice to meet you!</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-6 mb-4 md:mb-6">
              Welcome to...
            </h3>
            <div>
              <Image
                src="/assets/images/about.svg"
                width={300}
                height={300}
                alt="Behance"
                className="z-1"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text font-bold text-2xl md:text-3xl">
                JACOB JONES
              </p>
              <p className="mb-3 mt-3 text-sm md:text-medium font-light">
                <span className="font-bold italic ">Product Designer</span>{" "}
                based in <span className="font-bold italic">London</span>
              </p>
              <div className="flex gap-2 items-center mt-2">
                <p className="text-black text-[15px] underline">Download CV</p>
                <div>
                  <Image
                    src="/assets/images/northEastPlain.svg"
                    width={10}
                    height={10}
                    alt="hero"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[70%] lg:ml-12 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6 w-full lg:w-[80%]">
              <div className="flex items-center gap-2">
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
                  src="/assets/images/user2.svg"
                  width={30}
                  height={30}
                  alt="user2"
                />
                <p className="text-[#141313] font-bold italic">25 years</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/mail.svg"
                  width={30}
                  height={30}
                  alt="mail"
                />
                <p className="text-[#141313] font-bold italic">
                  jacob360@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/location.svg"
                  width={30}
                  height={30}
                  alt="location"
                />
                <p className="text-[#141313] font-bold italic">
                  United Kingdom, London
                </p>
              </div>
            </div>
            <hr className="divide-y w-full lg:w-[80%]" />
            <div className="flex flex-col lg:flex-row mt-8 gap-2">
              <div className="w-full lg:w-[40%] mb-6 lg:mb-0">
                <div className="flex gap-3 items-center mb-4">
                  <p className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text font-bold text-3xl md:text-5xl">
                    10+
                  </p>
                  <p className="text-sm italic font-bold">
                    years
                    <br />
                    experience...
                  </p>
                </div>
                <p className="text-black text-sm font-light">
                  Hello there! My name is{" "}
                  <span className="text-[#B86ADF]">Jacob Jones</span>. I am a
                  web designer & developer, and I&apos;m very passionate and
                  dedicated to my work.
                </p>
              </div>
              <div className="w-full lg:w-[40%]">
                <div className="flex gap-3 items-center mb-4">
                  <p className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text font-bold text-3xl md:text-5xl">
                    14
                  </p>
                  <p className="text-sm italic font-bold">
                    Clients
                    <br />
                    Worldwide...
                  </p>
                </div>
                <p className="text-black text-sm font-light">
                  With 10+ years experience as a professional a graphic
                  designer, I have acquired the skills and knowledge necessary
                  to make your project a success.
                </p>
              </div>
            </div>
            <div className="bg-[#141313] py-8 px-8 flex flex-col md:flex-row items-center justify-center gap-6 w-full lg:w-[80%] mt-10">
              <Image
                src="/assets/images/quote.svg"
                width={45}
                height={45}
                alt="Behance"
                className="opacity-20"
              />
              <p className="text-white italic text-base text-center md:text-left">
                “Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Faucibus sed sit ultrices et sed metus sollicitudin.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] flex flex-col lg:flex-row justify-between items-center px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 lg:py-16 mt-20 w-full lg:w-[82%]">
        <div className="w-full lg:w-[50%] mb-8 lg:mb-0">
          <p className="italic text-sm text-white">Experience</p>
          <h3 className="text-white mt-4 mb-4 text-2xl sm:text-3xl">
            MY EXPERIENCE
          </h3>
          <p className="text-white text-xs font-light w-full md:w-[60%] mb-6 leading-5">
            Hello there! My name is Jacob Jones. I am a web designer &
            developer, and I&apos;m very passionate and dedicated to my work.
          </p>
          <div className="w-auto">
            <Button text="Download my resume" />
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-white italic font-bold">- 2018 - Present</p>
              <p className="text-white">- Rolling Thunder</p>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              LEAD UI/UX DESIGNER
            </h3>
            <hr className="dividey-y" />
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-white italic font-bold">- 2018 - 2010</p>
              <p className="text-white">- Locost Accessories</p>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              SENIOR UI/UX DESIGNER
            </h3>
            <hr className="dividey-y" />
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-white italic font-bold">- 2008 - 2006</p>
              <p className="text-white">- Sagebrush</p>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              JUNIOR UI/UX DESIGNER
            </h3>
            <hr className="dividey-y" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
