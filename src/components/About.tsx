import React from "react";
import myProfilePicture from '../../public/assets/myProfilePicture.jpg'
import Image from "next/image";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 reveal">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-10">
        <div className="flex flex-row justify-between">
        <div className="col-span-2 space-y-4">
          <h2 className="tracking-wide">About Me</h2>
          <p>
            Hello! My name is Armandas and I enjoy creating things for the web.
            My interest in web development started in 2019 but it was put on
            hold until the time was right for me to change my career path. In
            2021-2022 I took a deep dive in learning to write code and etc... </p>
            <p>Fast-forward to today, and I’ve finished my courses, made <a className="text-[#5e98ce] sliding font-semibold" href="https://armandas-online-1-shop.netlify.app/">a test online shop website</a>
            , made some <a className="text-[#5e98ce] sliding font-semibold" href="https://github.com/ArmandasG?tab=repositories">starter shells</a> for learning new
            technologies and was hired by Summum Bit, UAB as a Junior Full Stack Developer. My main focus these days is working on and learning as much as
            possible about the web/computers/science beneath it. </p> <p> I am
            also currently making another booking/game website with Node JS, Next JS
            and TS and will most likely be using some sort of API’s.
          </p>
        </div>
        </div>

                <div className="m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in-out duration-300 sm:mt-0 mt-4">
        <Image className="rounded-xl max-h-auto md:max-w-[400px] m-auto" src={myProfilePicture} alt="myProfilePicture" />
        </div>

      </div>
    </div>
  );
}

export default About;
