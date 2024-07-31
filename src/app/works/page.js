/** @format */

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const projects = [
  {
    title: "Bally\nWebsite\nResearch",
    image: "/assets/images/img1.svg",
  },
  {
    title: "Bally\nWebsite\nResearch",
    image: "/assets/images/img2.svg",
  },
  {
    title: "Bally\nWebsite\nResearch",
    image: "/assets/images/img3.svg",
  },
  {
    title: "Bally\nWebsite\nResearch",
    image: "/assets/images/img4.svg",
  },
];

const services = [
  { image: "/assets/images/service4.svg" },
  { image: "/assets/images/service3.svg" },
  { image: "/assets/images/service1.svg" },
  { image: "/assets/images/service2.svg" },
];


const Works = () => {
  return (
    <section className="overflow-y-scroll h-screen element-without-scrollbar">
      <div className="px-[80px] mt-16 flex flex-col justify-center">
        <p className="mb-3 text-[#141313] italic font-bold">work</p>
        <h3 className="text-3xl text-[#141313] font-bold mb-6">
          RECENT PROJECT
        </h3>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[95%]">
            {projects.map((project, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div>
                  <p className="italic font-normal text-sm mb-3">
                    UX case study
                  </p>
                  <h3 className="font-bold text-3xl">
                    {project.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h3>
                  <div className="mt-4">
                    <Image
                      src="/assets/images/arrowUp.svg"
                      width={30}
                      height={30}
                      alt="Arrow"
                    />
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    width={250}
                    height={250}
                    alt="Project Image"
                  />
                </div>
              </div>
            ))}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
              <Button text="Load more" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] px-[100px] py-8 mt-20 w-[85%]">
          <div className="text-center mb-8">
            <p className="italic text-sm text-white">Testimonial</p>
            <h3 className="text-3xl text-white mt-4 font-bold">
              WHAT THEY SAY
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-b">
            <div className="w-full md:w-[45%] mb-6 md:mb-0">
              <Image
                src="/assets/images/image.svg"
                width={250}
                height={250}
                alt="Testimonial Image"
              />
            </div>
            <div className="w-full md:w-[45%]">
              <p className="italic font-normal text-white mb-4 md:mb-6">
                “File storage made easy – including powerful features you won’t
                find anywhere else. Whether you’re.”
              </p>
              <p className="text-white font-normal text-base">
                - Larry Diamond
              </p>
              <p className="font-normal text-white text-xs mt-2 md:mt-2">
                Chief Executive Officer, Besnik
              </p>
              <div className="mt-3">
                <Image
                  src="/assets/images/arrows.svg"
                  width={120}
                  height={120}
                  alt="Arrows"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-between items-center">
            {services.map((service, index) => (
              <Image
                key={index}
                src={service.image}
                width={150}
                height={150}
                alt="Service Image"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
