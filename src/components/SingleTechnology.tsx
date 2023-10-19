import Image from 'next/image'
import React from 'react'

type SingleTechnology = {
    name: string;
    imageURL: string;
    imgWidth: number;
    imgHeight: number;
    imgAlt: string;
};

function SingleTechnology({name, imageURL, imgWidth, imgHeight, imgAlt}: SingleTechnology): JSX.Element {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
            <Image src={`${imageURL}`} width={imgWidth} height={imgHeight} alt={`${imgAlt}`} />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>{name}</h3>
        </div>
    </div>
    </div>
  )
}

export default SingleTechnology