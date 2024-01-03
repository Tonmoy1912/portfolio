import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Navbar(){
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-4 sm:px-10 md:px-20 mb-8">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Tonmoy1912
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
            <a href={social.href} key={social.name} target="_black">
          <Image
            
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
          </a>
        ))}
      </div>
    </div>
  );
};

