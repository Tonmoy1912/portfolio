import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import style from "./style.module.css"

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
export default function projects({ contributors }) {

  // useEffect(()=>{
  //   const swiper = new Swiper('.swiper', {
  //     speed: 400,
  //     spaceBetween: 100,
  //   });

  // },[])
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>


      <div className='h-[70%] w-[80%] border-2 border-white rounded-3xl overflow-clip backdrop-blur-md'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          // pauseOnMouseEnter={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper h-full w-full "
        >
          <SwiperSlide className='h-full w-full relative'>
            <div className='h-full w-full flex flex-col md:flex-row '>
              <div className="w-full h-1/3 md:h-full md:w-[55%] bg-cover md:bg-contain md:bg-no-repeat bg-center " style={{ backgroundImage: 'url(/inotebook_project.jpg)' }}></div>
              <div className='w-full h-2/3 md:h-full md:w-[45%] bg-transparent text-white font-serif  p-4 border-t-2 border-t-white md:border-l-2 md:border-l-white md:border-t-0 '>
                <ul className='flex flex-col gap-2 md:gap-4 text-xs md:text-base'>
                  <li>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                      inotebook
                    </span>
                  </li>
                  <li>
                    This a notebook app where user can create, update and maintain
                    their day to day notes and fetch user specific notes.
                  </li>
                  <li>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Techstack: </span>
                    <strong>
                      React.js, Epress.js, MongoDB, JWT authentication,
                      Bootstrap.
                    </strong>
                  </li>
                  <li className='absolute bottom-5 right-5'>
                    <a href="https://inotebook-1912.netlify.app/" target='_blank' className='px-3 py-2 bg-blue-600 rounded-2xl'>Link to Website</a>
                  </li>
                </ul>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide className='h-full w-full relative'>
            <div className='h-full w-full flex flex-col md:flex-row '>
              <div className="w-full h-1/3 md:h-full md:w-[55%] bg-cover md:bg-contain md:bg-no-repeat bg-center " style={{ backgroundImage: 'url(/thinkfasttrivia_project.jpg)' }}></div>
              <div className='w-full h-2/3 md:h-full md:w-[45%] bg-transparent text-white font-serif  p-3 border-t-2 border-t-white md:border-l-2 md:border-l-white md:border-t-0 '>
                <ul className='flex flex-col  gap-2 md:gap-4 text-xs md:text-base'>
                  <li>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                      Think-Fast-Trivia
                    </span>
                  </li>
                  <li>
                    This is a platform where user can create quiz forms and attempt quizzes in a
                    time bounded environment and also track their performance with it's
                    analytics feature.
                  </li>
                  <li>
                    This is a group project and I did the backend part and authentication.
                  </li>
                  <li>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Techstack: </span>
                    <strong>
                      React.js, Next.js, MongoDB, Tailwind CSS, NextAuth.
                    </strong>
                  </li>
                  <li>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Contributors: </span>

                    {/* contributors list */}
                    <div className='flex flex-row'>
                      {
                        contributors.map(function (data) {
                          return <div className={style.profile} key={data.id}>
                            <a href={data.html_url} target='_blank'>
                              <img src={data.avatar_url}></img>
                              <h3>{data.login}</h3>
                            </a>
                          </div>
                        })
                      }
                    </div>

                  </li>
                  <li className='absolute bottom-5 right-5'>
                    <a href="https://think-fast-trivia.vercel.app/" target='_blank' className='px-3 py-2 bg-blue-600 rounded-2xl'>Link to Website</a>
                  </li>
                </ul>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide className='h-full w-full relative'>
            <div className='h-full w-full flex flex-col md:flex-row '>
              <div className="w-full h-1/3 md:h-full md:w-[55%] bg-cover md:bg-contain md:bg-no-repeat bg-center " style={{ backgroundImage: 'url(/weatherapp_project.jpg)' }}></div>
              <div className='w-full h-2/3 md:h-full md:w-[45%] bg-transparent text-white font-serif  p-4 border-t-2 border-t-white md:border-l-2 md:border-l-white md:border-t-0 '>
                <ul className='flex flex-col gap-2 md:gap-4 text-xs md:text-base'>
                  <li>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                      WeatherApp
                    </span>
                  </li>
                  <li>
                    This is a weather app that gives you weather related information
                    about any city or geographical location. It uses Rapidapi to fetch the
                    weather information.
                  </li>
                  <li>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Techstack: </span>
                    <strong>
                      HTML, CSS, JavaScript and Bootstrap.
                    </strong>
                  </li>
                  <li className='absolute bottom-5 right-5'>
                    <a href="https://weatherapp-1912.netlify.app/" target='_blank' className='px-3 py-2 bg-blue-600 rounded-2xl'>Link to Website</a>
                  </li>
                </ul>
              </div>
            </div>

          </SwiperSlide>

        </Swiper>
      </div>

    </div>
  );
}


export async function getStaticProps(context) {
  let data = await fetch('https://api.github.com/repositories/699492494/contributors', {
    method: 'GET',
  });

  data = await data.json();

  // console.log(data);

  return {
    props: { contributors: data }, // will be passed to the page component as props
  }

}
