import Image from 'next/image'
import React from 'react'

function Technologies() {
  return (
    <div className='w-full h-screen'>
        <div className='max-w-[1240px] m-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase'>Technologies</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-3 lg:grid-col-3 gap-8'>


    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/htmlpng.png' width='74' height='54' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>HTML</h3>
        </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/csspng.png' width='54' height='54' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>CSS</h3>
        </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/jspng.png' width='54' height='54' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>JavaScript</h3>
        </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/reactjspng.png' width='64' height='64' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>React JS</h3>
        </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/tailwindcsspng.png' width='106' height='94' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>Tailwind CSS</h3>
        </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/sasspng.png' width='64' height='64' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>SASS</h3>
        </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/tspng.png' width='64' height='64' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>TypeScript</h3>
        </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/nextjspng.png' width='64' height='64' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>Next JS</h3>
        </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src='/assets/technologies/nodejspng.png' width='64' height='64' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>Node JS</h3>
        </div>
    </div>
    </div>

    </div>
        </div>
    </div>
  )
}

export default Technologies