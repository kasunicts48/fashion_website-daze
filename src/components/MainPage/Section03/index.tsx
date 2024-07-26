import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

const Section03 = () => {
    return (
        <div className='relative grid grid-cols-2 px-16 py-4 justify-between'>
            <div className='flex items-center justify-center '>
                <div className='content-around' >
                    <div className='text-6xl font-normal' >
                        Dress Code
                        <br />
                        <span className='font-medium italic'>this summer</span>
                    </div>
                    <div className='py-8 font-sans text-gray-400 text-xl'>
                        We care about the future of our planet, so our summer <br /> collection is created using environmentally friendly <br /> material and safe production technologies.
                    </div>
                    <div className='py-0 font-sans text-xl'>
                        Join us and move for yourself this summer with Daze.<br />
                        Get inspired, create and enjoy every moment in new<br />
                        stylish looks!
                    </div>

                </div>

                <div className='absolute flex items-center gap-4 text-xl font-sans float-right hover:font-semibold hover:cursor-pointer bottom-16 left-64'>EXPLORE <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="50.000000pt" height="10.000000pt" viewBox="0 0 500.000000 100.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M4507 923 c-4 -3 -7 -20 -7 -37 0 -26 21 -52 142 -173 l143 -143-2368 0 -2367 0 0 -50 0 -50 
                                2372 0 2373 0 -148 -148 c-149 -150 -167 -178 -135 -210 29 -29 55 -10 251 186 151 151 197 203 197 222 
                                0 19 -45 70 -193 218 -166 166 -196 192 -223 192 -17 0 -34 -3 -37 -7z" />
                    </g>
                </svg>  </div>



            </div>
            <div className='flex justify-end' >
                <Image
                    alt='product image'
                    height={800}
                    width={800}
                    src={"/images/pexels-frank-minjarez-333886454-19864372.jpg"}
                // className=""
                />
            </div>
        </div>
    )
}

export default Section03