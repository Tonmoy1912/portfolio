import Image from "next/image";
import Link from "next/link";
import { Inter } from 'next/font/google'
import Typed from 'react-typed';
// import ReactTyped from "react-typed";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main className="w-screen h-screen relative ">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-16 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[20] max-w-[750px] py-16 md:py-0">
          <h1 className="text-[50px] text-white font-semibold">
            Hi! I'm
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {/* {" "} */}
              <Typed
                    strings={['Tonmoy Biswas','a Web Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
              {/* Web Development */}
            </span>
          </h1>
          <p className="text-gray-200 pr-14 md:pr-0">
          I’m Tonmoy Biswas, a 3rd year Computer Science and Engineering undergrad at Jadavpur University. I am a web development and a competitive programmer. I like to learn new technology and algorithm.

          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Skills
        </Link>

        <Link
          href="/projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div> */}

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={200}
          width={200}
          className="absolute hidden md:block right-55 top-56"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute overflow-clip  bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={1700}
          height={1700}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
