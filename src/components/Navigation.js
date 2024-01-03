import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NavLinks } from '@/constants';
import Link from 'next/link';
import Transition from './Transition';

export default function Navigation() {
    const [isRouting,setisRouting]=useState(false);
    const path=useRouter().pathname;
    const [prevPath,setPrevPath]=useState('/');

    useEffect(()=>{
        if(prevPath!==path){
            setisRouting(true);
        }
    },[path,prevPath]);

    useEffect(()=>{
        if(isRouting){
            setPrevPath(path);
            const timeout=setTimeout(()=>{
                setisRouting(false);
            },[1200]);
            return ()=>{
                clearTimeout(timeout);
            }
        }
    },[isRouting]);

    return (
        <div
        //   style={{ left: "20%" }}
          className="fixed left-[8%] md:left-[30%] z-[50] -bottom-20 w-[85%] md:w-[40%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
        >
    
          {isRouting && <Transition />}
          {NavLinks.map((nav) => (
            <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[15%]" >
              <nav.icon
                className={`w-[18px] h-[18px] md:w-[24px] md:h-[24px] ${
                  path === nav.name ? "text-purple-800" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      );
}
