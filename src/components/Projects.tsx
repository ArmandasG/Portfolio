import Image from 'next/image'
import React from 'react'
import clothesShop from '../../public/assets/projects/clothes.jpg'
import portfolioPage from '../../public/assets/projects/portfolio.jpg'
import workInProgressPage from '../../public/assets/projects/workInProgress.jpg'
import Link from 'next/link'

function Projects() {
  return (
    <div id='work' className='w-full py-16 reveal'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase'>Projects</p>
            <h2 className='py-4'>What I’ve Been Working On</h2>
            <div className='grid gap-8'>
                <div className='flex flex-col md:flex-row justify-between gap-8'>
                <div className='relative flex items-center justify-center h-auto md:w-[50%] shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#cfe2f3] to-[#cfe2f3]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={clothesShop} alt='clothesShop' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                        <Link href="https://armandas-online-1-shop.netlify.app/"><p className='sliding text-gray-800 text-xl'>Demo</p></Link>
                        <Link href="https://github.com/ArmandasG/Online-Shop1"><p className='sliding text-gray-800 text-xl my-4'>Code</p></Link>            
                    </div>
                    </div>
                    <div className='md:w-[50%] flex flex-col justify-between'>
                        <h3 className='text-2xl tracking-wide'>Building an Online Clothes Shop from Scratch</h3>
                    <p className='tracking-wide text-gray-800 max-w-[95%]'>
                   I’ve faced several challenges on how to structure 
my code, how to properly use a DB, what are the best practices in 
general, managing global states and states in general, avoid overly 
complex functions or break them into smaller ones, dealing with 
async code, managing element changes when making the website 
responsive, dealing with CRUD and etc...
                    </p>
                    <ul className='flex items-end flex-row justify-between max-w-[90%]'>
                        <li className='cursor-default text-[#1369ab] font-bold'>React JS</li>
                        <li className='cursor-default text-[#1369ab] font-bold'>JavaScript</li>
                        <li className='cursor-default text-[#1369ab] font-bold'>Tailwind CSS</li>
                        <li className='cursor-default text-[#1369ab] font-bold'>Firebase</li>
                    </ul>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse justify-between gap-8 w-full'>
                <div className='relative flex items-center justify-center h-auto md:w-[50%] shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#cfe2f3] to-[#cfe2f3]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={portfolioPage} alt='portfolio' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                        <Link href="https://github.com/ArmandasG/Portfolio"><p className='sliding text-gray-800 text-xl my-4'>Code</p></Link>            
                    </div>
                    </div>
                    <div className='md:w-[50%] flex flex-col justify-between gap-4'>
                        <h3 className='text-2xl tracking-wide'>Making My Portfolio Page</h3>
                    <p className='tracking-wide text-gray-800 max-w-[95%]'>
                    While the task was not as complex as previous challenges, I found that creating an aesthetically pleasing site was quite challenging. Considering that I have spent a reasonable amount of time with my Clothing Shop project that provided me with the experience on how to better structure my code, take different design decisions from the code and overal style perspective. I was able to finish it in a significantly shorter amount of time and am happy with the result (for now).
                    </p>
                    <ul className='flex flex-row justify-between max-w-[90%]'>
                        <li className='cursor-default text-[#1369ab] font-bold'>Next JS</li>
                        <li className='cursor-default text-[#1369ab] font-bold'>TypeScript</li>
                        <li className='cursor-default text-[#1369ab] font-bold'>Tailwind CSS</li>
                    </ul>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-8 w-full'>
                <div className='relative flex items-center justify-center h-auto md:w-[50%] shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#cfe2f3] to-[#cfe2f3]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={workInProgressPage} alt='workInProgress' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                        <p className='text-gray-800 text-xl my-4 cursor-default'>Work In Progress</p>       
                    </div>
                    </div>
                    <div className='md:w-[50%] flex flex-col justify-between gap-4'>
                        <h3 className='text-2xl tracking-wide'>Booking/Game Website (In progress)</h3>
                    <p className='tracking-wide text-gray-800 max-w-[95%]'>
                    I’ve spent some time on thinking of an idea on what I can do next and what skills I do need to learn to do that. And I’ve figured out I’ll be making a booking/game website while using Next JS, TypeScript, Tailwind CSS and Node JS. Most likely several API’s will be used and it will be an interactive experience for the user. (In progress)
                    </p>
                    <ul className='flex flex-row justify-between max-w-[90%]'>
                        <li className='cursor-default text-[#1369ab] font-bold'>Next JS</li>
                        <li className='cursor-default text-[#1369ab] font-bold'>TypeScript</li>
                        <li className='cursor-default text-[#1369ab] font-bold'>Node JS</li>
                    </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects