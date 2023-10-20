import Image from 'next/image'
import React from 'react'
import SingleTechnology from './SingleTechnology'

function Technologies() {
  return (
    <div id='technologies' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] lg:m-auto flex flex-col justify-center h-full mx-2'>
        <p className='text-xl tracking-widest uppercase'>Technologies</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8'>

<SingleTechnology name='HTML' imageURL='/assets/technologies/htmlpng.png' imgWidth={74} imgHeight={54} imgAlt='htmlPng' />
<SingleTechnology name='CSS' imageURL='/assets/technologies/csspng.png' imgWidth={54} imgHeight={54} imgAlt='cssPng' />
<SingleTechnology name='JavaScript' imageURL='/assets/technologies/jspng.png' imgWidth={54} imgHeight={54} imgAlt='jsPng' />
<SingleTechnology name='React JS' imageURL='/assets/technologies/reactjspng.png' imgWidth={64} imgHeight={64} imgAlt='reactJsPng' />
<SingleTechnology name='Tailwind CSS' imageURL='/assets/technologies/tailwindcsspng.png' imgWidth={106} imgHeight={94} imgAlt='tailwindcssPng' />
<SingleTechnology name='SASS' imageURL='/assets/technologies/sasspng.png' imgWidth={64} imgHeight={64} imgAlt='sassPng' />
<SingleTechnology name='TypeScript' imageURL='/assets/technologies/tspng.png' imgWidth={74} imgHeight={54} imgAlt='tsPng' />
<SingleTechnology name='Next JS' imageURL='/assets/technologies/nextjspng.png' imgWidth={74} imgHeight={54} imgAlt='nextJsPng' />
<SingleTechnology name='Node JS' imageURL='/assets/technologies/nodejspng.png' imgWidth={74} imgHeight={54} imgAlt='nodeJsPng' />
    </div>
        </div>
    </div>
  )
}

export default Technologies