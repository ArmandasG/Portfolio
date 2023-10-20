import Link from 'next/link'
import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { LuGithub } from 'react-icons/lu'

function LearningProjects() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase'>Other Projects</p>
            <h2 className='py-4'>What I’ve been learning</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8'>
                    <div className='group p-8 rounded-xl shadow-xl shadow-gray-400 flex flex-col justify-between gap-8 hover:scale-105 duration-300 ease-in-out'>
                        <div className='flex flex-row justify-between items-center'>
                        <FaRegFolder className='text-[#1369ab]' size={60} />
                        <Link href='https://github.com/ArmandasG/Learing-TS-Taskify'><LuGithub className='hover:text-[#1369ab] ease-in-out duration-300' size={40} /></Link>
                        </div>
                        <h3 className='text-2xl tracking wide group-hover:text-[#1369ab]'>TypeScript</h3>
                    <p className='tracking-wide text-gray-800 max-w-[95%]'> Using TypeScript to make a simple todo list - adding, deleting, editing tasks while moving props all over the project.
                    </p>
                    <ul className='flex flex-row gap-8 text-[#1369ab] font-semibold'>
                        <li>TypeScript</li>
                        <li>React JS</li>
                        <li>CSS</li>
                    </ul>
                    </div>
                
                <div className='group p-8 rounded-xl shadow-xl shadow-gray-400 flex flex-col justify-between gap-8 hover:-translate-y-0.5 hover:scale-105 duration-300 ease-in-out'>
                    <div className='flex flex-row justify-between items-center'>
                    <FaRegFolder className='text-[#1369ab]' size={60} />
                    <Link href='https://github.com/ArmandasG/NodeJS-Learning'><LuGithub className='hover:text-[#1369ab] ease-in-out duration-300' size={40} /></Link>
                    </div>
                    <h3 className='text-2xl tracking wide group-hover:text-[#1369ab]'>Node JS Basics</h3>
                    <p className='tracking-wide text-gray-800 max-w-[95%]'> Node.js, Express, Mongo DB, Mongoose - GET, POST, DELETE requests, MVC.
                    </p>
                    <ul className='flex flex-row gap-8 text-[#1369ab] font-semibold'>
                        <li>Node JS</li>
                        <li>ejs</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className='group p-8 rounded-xl shadow-xl shadow-gray-400 flex flex-col justify-between gap-8 hover:scale-105 duration-300 ease-in-out'>
                    <div className='flex flex-row justify-between items-center'>
                    <FaRegFolder className='text-[#1369ab]' size={60} />
                    <Link href='https://github.com/ArmandasG/NodeJS-JWT-Auth'><LuGithub className='hover:text-[#1369ab] ease-in-out duration-300' size={40} /></Link>
                    </div>
                    <h3 className='text-2xl tracking wide group-hover:text-[#1369ab]'>Node JS JWT Auth</h3>
                    <p className='tracking-wide text-gray-800 max-w-[95%]'> Authentication using Node.js, Express, Mongo DB, Mongoose, JWT, Routes, MVC. Create User (Signup), Login, Logout, Error handling, Hashing passwords, Cookie usage, Protected routes, User available in views.
                    </p>
                    <ul className='flex flex-row gap-8 text-[#1369ab] font-semibold'>
                        <li>Node JS</li>
                        <li>ejs</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className='group p-8 rounded-xl shadow-xl shadow-gray-400 flex flex-col justify-between gap-8 hover:scale-105 duration-300 ease-in-out'>
                    <div className='flex flex-row justify-between items-center'>
                    <FaRegFolder className='text-[#1369ab]' size={60} />
                    <Link href='https://github.com/ArmandasG/final_exam_react_firebase'><LuGithub className='hover:text-[#1369ab] ease-in-out duration-300' size={40} /></Link>
                    </div>
                    <h3 className='text-2xl tracking wide group-hover:text-[#1369ab]'>My Final Exam From My Coding School</h3>
                    <p className='tracking-wide text-gray-800 max-w-[95%]'> 
                    Everything was put into this: HTML, SASS, JS, React JS, state managment, Context API, Loading states, User Authentication, User feedback messages, Single Element page and etc... 
                    </p>
                    <ul className='flex flex-row gap-8 text-[#1369ab] font-semibold'>
                        <li>React JS</li>
                        <li>Firebase</li>
                        <li>SASS</li>
                    </ul>
                </div>

            </div>
        </div>
        </div>
  )
}

export default LearningProjects