/** @format */

import React from "react";
import Image from "next/image";

const Button = ({ text = "Let’s talk with me", onClick }) => {
  return (
    <button onClick={onClick} className="inline-flex bg-[#141313]  items-center py-[12px] px-8 gap-3 ">
      <p className="text-white text-[15px]">{text}</p>
      <div>
        <Image
          src="/assets/images/northEast.svg"
          width={20}
          height={20}
          alt="hero"  
        />
      </div>
    </button>
  );
};

export default Button;
