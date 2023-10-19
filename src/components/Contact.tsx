import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Image from 'next/image'
import contactMe from '../../public/assets/ContactMe.jpg'

function Contact() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase'>What’s Next ?</p>
    <h2 className='py-4'>Get In Touch</h2>
    <div className='grid gap-8'>
    <div className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
        <Image src={contactMe} alt="ContactMe" />
    <h3 className='text-3xl py-4'>Armandas Genys</h3>
    <p className='py-4'>I’m available for full-time positions. Contact me and let’s talk.</p>
    <p className='md:text-xl tracking-widest uppercase py-4'>Connect With Me</p>
    <div className='w-full flex py-4 justify-center md:justify-start gap-8'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
                </div>
        </div>
    </div>
    
    </div>
    
    </div>
    </div>
  )
}

export default Contact