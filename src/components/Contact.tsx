import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import Image from 'next/image'
import contactMe from '../../public/assets/ContactMe.jpg'
import Link from 'next/link'

function Contact() {
  return (
    <div id='contact' className='w-full py-16 reveal'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase'>What’s Next ?</p>
    <h2 className='py-4'>Get In Touch</h2>
    <div className='grid gap-8'>
    <div className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
        <Image className='rounded-xl' src={contactMe} alt="ContactMe" />
    <h3 className='text-3xl py-4'>Armandas Genys</h3>
    <p className='py-4'>I’m currently working at Summum Bit, UAB as a Junior Full Stack Developer.</p>
    <p className='md:text-xl tracking-widest uppercase py-4'>Connect With Me</p>
    <div className='w-full flex py-4 justify-center md:justify-start gap-8'>
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
    <div className='flex justify-center py-12'>
        <Link href='/#'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <MdKeyboardDoubleArrowUp className='text-[#1369ab]' size={30} />
            </div>
        </Link>
    </div>
    </div>
  )
}

export default Contact