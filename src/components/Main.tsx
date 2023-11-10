import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link'

function Main() {
  return (
    <div id='main' className='w-full h-screen'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
    <div className='flex items-center flex-col gap-y-2'>
            <p className='text-sm tracking-widest text-gray-600'>Hi, my name is</p>
            <h1 className='text-gray-800'>Armandas Genys</h1>
            <h2 className='text-lg tracking-widest text-gray-500 pt-2'>Junior Full Stack Developer</h2>
            <p className='text-sm tracking-wide text-gray-800 max-w-[65%]'>I’m a junior full stack developer specializing in building digital experiences. Currently, I’m focused on building responsive front-end web applications while learning back-end technologies and everything around it.</p>
            <div className='flex items-center gap-4 justify-between max-w-[330px] m-auto py-4'>
            <Link href='https://www.linkedin.com/in/armandas-genys/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
                </div>
                </Link>
                <Link href='https://github.com/ArmandasG'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
                </div>
                </Link>
                <a href="mailto:genysarmandas@gmail.com">
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
                </div>
                </a>
                
            </div>
    </div>
        </div>
    </div>
  )
}

export default Main