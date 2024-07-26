import React from 'react'
import Image from 'next/image';

const RightSide = () => {
    return (
        <div className='flex flex-col md:flex-row items-center w-full text-4xl md:text-8xl p-4 md:p-8'>
            <div className='md:mr-36 w-full'>
                <div className='md:ml-72 text-center md:text-left'>Fashionable</div>
                <div className='flex items-center justify-center md:justify-start md:ml-36 mt-4 md:mt-0'>
                    <div>Women's</div>
                    <div className='ml-5 mt-5 h-1 bg-gray-700 w-full'>
                    </div>
                </div>
                <div className='font-medium italic md:ml-96 mt-4 md:mt-0 text-center md:text-left'>Collection</div>
                <div className='flex justify-center md:justify-start md:ml-96 mt-10 md:mt-40 w-max text-xl py-2 px-8 md:px-12 font-sans border border-black hover:scale-105 hover:cursor-pointer'>
                    SHOP NOW
                </div>
            </div>
        </div>

    )
}

export default RightSide