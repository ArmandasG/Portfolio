import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="fixed w-full h-34 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assets/navLogos.png" alt="logo" width='125' height='50' />
      
      <div>
        <ul className="flex items-center gap-6">
          <Link href="/">
            <li className="ml-10 text-sm uppercase transition-transform transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-[#475f7e]">About</li>
          </Link>
          {/* <Link href="/">
            <li className="ml-10 text-sm uppercase transition-transform transform hover:translate-x-0.5 hover:-translate-y-0.5">Experience</li>
          </Link> */}
          <Link href="/">
            <li className="ml-10 text-sm uppercase transition-transform transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-[#475f7e]">Work</li>
          </Link>
          <Link href="/">
            <li className="ml-10 mr-10 text-sm uppercase transition-transform transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-[#475f7e]">Contact</li>
          </Link>
          <Link href="/" className="">
          <div className="bg-white border rounded">
            <li className=" px-4 py-2 bg-[#ecf0f3] border rounded border-white text-sm uppercase transition-transform,colors transform hover:-translate-x-1 hover:-translate-y-1 hover:text-[#475f7e] duration-200">Resume</li>
            </div> 
          </Link>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
