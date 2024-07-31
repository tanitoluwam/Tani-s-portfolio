/** @format */

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const blogs = [
  {
    image: "/assets/images/blog1.svg",
    date: "10 July, 2022",
    title: "12 unique examples of portfolio websites",
  },
  {
    image: "/assets/images/blog2.svg",
    date: "10 July, 2022",
    title: "12 unique examples of portfolio websites",
  },
  {
    image: "/assets/images/blog3.svg",
    date: "10 July, 2022",
    title: "12 unique examples of portfolio websites",
  },
];

const Blogs = () => {
  return (
    <section className="px-4 md:px-[120px] mt-20 mx-auto w-full max-w-[1000px]">
      <div className="text-center">
        <p className="mb-3 text-[#141313] italic font-normal">Blog</p>
        <h3 className="text-3xl text-[#141313] font-bold">READ MY BLOG</h3>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start">
            <Image
              src={blog.image}
              width={250}
              height={250}
              alt="Blog Image"
              className="items-center"
            />
            <p className="italic font-normal text-xs mt-3">{blog.date}</p>
            <p className="mt-3 font-bold">{blog.title}</p>
            <hr className="mt-6 divide-y w-full" />
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button text="Load More" />
      </div>
    </section>
  );
};

export default Blogs;
