import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

// const v1={
//     initial:{
//         x: '82vw'
//     },
//     whileInView:{
//         x: '0',
//         transition: {
//             delay: 0,
//             duration: 1.5
//         }
//     },
//     viewport:{ once: true }
// }

export default function EducationAndCoding() {
    const [device, setDevice] = useState("none");
    const [variants, setVariants] = useState({});
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setDevice("mobile")
            setVariants(
                {
                    initial: {
                        x: 0,
                        opacity: 0,
                        scaleX: 0
                    },
                    whileInView: {
                        x: '0',
                        scaleX: 1,
                        opacity: 1,
                        transition: {
                            delay: 0,
                            duration: 1,
                        }
                    },
                    viewport: { once: false }
                }
            )
        }
        else {
            setDevice("others")
            setVariants(
                {
                    initial: {
                        x: '82vw',
                        opacity: 1,
                        scaleX: 1
                    },
                    whileInView: {
                        x: '0',
                        opacity: 1,
                        scaleX: 1,
                        transition: {
                            delay: 0,
                            duration: 1,
                            ease: 'easeInOut'
                        }
                    },
                    viewport: { once: false }
                }
            );
        }
    };

    useEffect(handleResize, []);

    return (
        <Fragment>
            <div style={{ backgroundImage: "url(/bg-2.jpg)" }}
                className='w-screen h-screen fixed -z-10 flex items-center justify-center py-20 bg-center bg-cover'>

            </div>

            <h1 className="font-semibold text-white text-[50px] text-center pt-20">
                Education{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                    {" "}
                    &{" "}
                </span>
                Coding Profile
            </h1>

            {(device != "none") && (<div className='h-auto w-[70%] py-20 mx-auto bg-transparent flex flex-col gap-14 '>
                <motion.div className='flex flex-col md:flex-row w-full backdrop-blur-lg border-2 border-purple-800 rounded-md overflow-clip'
                    // variants={variants}
                    initial={variants.initial}
                    whileInView={variants.whileInView}
                    viewport={variants.viewport}
                >
                    <div className='h-36 w-full md:min-h-72 md:w-2/5 backdrop-blur-3xl bg-no-repeat bg-center bg-contain'
                        style={{ backgroundImage: "url(/JU.jpg)" }}
                    >

                    </div>
                    <div className='min-h-52 w-full md:min-h-72 md:w-3/5 bg-transparent border-t-2 border-l-0 md:border-t-0 border-t-purple-800 md:border-l-2 md:border-l-purple-800 text-white font-serif  p-4'>
                        <ul className='flex flex-col gap-2 md:gap-4 text-xs md:text-base'>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                                    Jadavpur University
                                </span>
                            </li>
                            <li>

                                B.E. Computer Science & Engineering
                            </li>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Batch: </span>

                                2021-25
                            </li>
                            <li>
                                3rd Year
                            </li>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>CGPA: </span>
                                8.80
                            </li>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Core Subjects: </span>
                                <strong>Obect Oriented Programming, Operation System, Database Management System, Computer Network</strong>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div className='flex flex-col md:flex-row w-full backdrop-blur-lg border-2 border-purple-800 rounded-md overflow-clip'
                    // variants={variants}
                    initial={variants.initial}
                    whileInView={variants.whileInView}
                    viewport={variants.viewport}
                >
                    <div className='h-36 w-full md:min-h-72 md:w-2/5 backdrop-blur-3xl bg-no-repeat bg-center bg-contain'
                        style={{ backgroundImage: "url(/google_kickstart.jpg)" }}
                    >

                    </div>
                    <div className='min-h-52 w-full md:min-h-72 md:w-3/5 bg-transparent border-t-2 border-t-purple-800 border-l-0 md:border-t-0 md:border-l-2 md:border-l-purple-800 text-white font-serif  p-4'>
                        <ul className='flex flex-col gap-2 md:gap-4 text-xs md:text-base'>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                                    Google Kick Start 22
                                </span>
                            </li>

                            <li>
                                Achieved a
                                {" "}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>global rank of 958 </span>
                                {" "}
                                in Google Kick Start round H 2022
                            </li>
                            <li>
                                Google Kick Start is a coding competition hosted by Google.
                            </li>
                            <li className='absolute bottom-5 right-5'>
                                <a href="https://drive.google.com/file/d/1rTjRbeYo73T0530IjihfhreML4BiMcpj/view?usp=drive_link" target='_blank' className='px-3 py-2 bg-blue-600 rounded-2xl'>Link </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div className='flex flex-col md:flex-row w-full backdrop-blur-lg border-2 border-purple-800 rounded-md overflow-clip'
                    // variants={variants}
                    initial={variants.initial}
                    whileInView={variants.whileInView}
                    viewport={variants.viewport}
                >
                    <div className='h-36 w-full md:min-h-72 md:w-2/5 backdrop-blur-3xl bg-no-repeat bg-center bg-contain'
                        style={{ backgroundImage: "url(/leetcode_profile.jpg)" }}
                    >

                    </div>
                    <div className='min-h-52 w-full md:min-h-72 md:w-3/5 bg-transparent border-t-2 border-t-purple-800 border-l-0 md:border-t-0 md:border-l-2 md:border-l-purple-800 text-white font-serif  p-4'>
                        <ul className='flex flex-col gap-2 md:gap-4 text-xs md:text-base'>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                                    LeetCode
                                </span>
                            </li>

                            <li>
                                Solved around
                                {" "}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>500 </span>
                                {" "}
                                DSA problem
                            </li>
                            <li>
                                Currnetly I'm
                                {" "}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Knight </span>
                                {" "}
                                at leetcode.
                            </li>
                            <li>
                                I'm rated among top
                                {" "}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>5% </span>
                                {" "}
                                coder at leetcode.
                            </li>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Highest Rating: </span>
                                {" "}
                                1972
                            </li>
                            <li className='absolute bottom-5 right-5'>
                                <a href="https://leetcode.com/tonmoy1912/" target='_blank' className='px-3 py-2 bg-blue-600 rounded-2xl'>Link </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div className='flex flex-col md:flex-row w-full backdrop-blur-lg border-2 border-purple-800 rounded-md overflow-clip'
                    // variants={variants}
                    initial={variants.initial}
                    whileInView={variants.whileInView}
                    viewport={variants.viewport}
                >
                    <div className='h-36 w-full md:min-h-72 md:w-2/5 backdrop-blur-3xl bg-no-repeat bg-center bg-contain'
                        style={{ backgroundImage: "url(/cf_profile.jpg)" }}
                    >

                    </div>
                    <div className='min-h-52 w-full md:min-h-72 md:w-3/5 bg-transparent border-t-2 border-t-purple-800 border-l-0 md:border-t-0 md:border-l-2 md:border-l-purple-800 text-white font-serif  p-4'>
                    <ul className='flex flex-col gap-2 md:gap-4 text-xs md:text-base'>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                                    CODEFORCES
                                </span>
                            </li>

                            <li>
                                Solved around
                                {" "}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>40 </span>
                                {" "}
                                DSA problem
                            </li>
                            <li>
                                Currnetly I'm
                                {" "}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Specialist </span>
                                {" "}
                                at CODEFORCES.
                            </li>
                            <li>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Highest Rating: </span>
                                {" "}
                                1450
                            </li>
                            <li className='absolute bottom-5 right-5'>
                                <a href="https://codeforces.com/profile/tonmoybiswas1912/" target='_blank' className='px-3 py-2 bg-blue-600 rounded-2xl'>Link </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>



            </div>)}
        </Fragment>
    )
}
