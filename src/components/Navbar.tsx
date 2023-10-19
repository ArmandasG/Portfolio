import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

useEffect(() => {
const handleShadow = () => {
  if (window.scrollY >= 90) {
    setShadow(true)
  } else {
    setShadow(false)
  }
}
window.addEventListener('scroll', handleShadow)
}, [])

  return (
    <div className={shadow ? 'fixed w-full h-34 bg-[#ecf0f3] shadow-xl z-[100]' : 'fixed w-full h-34 z-[100]'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
        <Image src="/assets/navLogo.png" alt="logo" width='125' height='50' />
        </Link>
      <div>
        <ul className="hidden md:flex items-center gap-6">
          <Link href="/#about">
            <li className="ml-10 text-sm uppercase transition-transform transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-[#1369ab]">About</li>
          </Link>
          <Link href="/#technologies">
            <li className="ml-10 text-sm uppercase transition-transform transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-[#1369ab]">Technologies</li>
          </Link>
          {/* <Link href="/">
            <li className="ml-10 text-sm uppercase transition-transform transform hover:translate-x-0.5 hover:-translate-y-0.5">Experience</li>
          </Link> */}
          <Link href="/#work">
            <li className="ml-10 text-sm uppercase transition-transform transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-[#1369ab]">Work</li>
          </Link>
          <Link href="/#contact">
            <li className="ml-10 mr-10 text-sm uppercase transition-transform transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-[#1369ab]">Contact</li>
          </Link>
          <Link href="/resume.pdf" className="">
          <div className="bg-white border rounded">
            <li className=" px-4 py-2 bg-[#ecf0f3] border rounded border-white text-sm uppercase transition-transform,colors transform hover:-translate-x-1 hover:-translate-y-1 hover:text-[#1369ab] duration-200">Resume</li>
            </div> 
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div className="flex w-full items-center justify-between">
          <Image src='/assets/navLogo.png' width='87' height='35' alt="/" />
          <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineClose />
          </div>
            </div>
<div className="border-b border-gray-300 my-4">
  <p className="w-[85%] md:w-[90%] py-4">Let&apos;s build something together !</p>
</div>
<div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href='/#about'>
                <li className="py-4 text-sm hover:scale-105 transition-transform transform hover:translate-x-2 hover:text-[#1369ab]">About</li></Link>
                <Link href='/#work'>
                <li className="py-4 text-sm hover:scale-105 transition-transform transform hover:translate-x-2 hover:text-[#1369ab]">Work</li></Link>
                <Link href='/#contact'>
                <li className="py-4 text-sm hover:scale-105 transition-transform transform hover:translate-x-2 hover:text-[#1369ab]">Contact</li></Link>
                <Link href='/resume.pdf'>
                <li className="py-4 text-sm hover:scale-105 transition-transform transform hover:translate-x-2 hover:text-[#1369ab]">Resume</li></Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text text-[#1369ab]">Contact me</p>
                <div className="flex items-center gap-10 my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Link href='https://www.linkedin.com/in/armandas-genys/'>
                  <FaLinkedinIn/>
                  </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub/>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="mailto:genysarmandas@gmail.com">
                  <AiOutlineMail/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
