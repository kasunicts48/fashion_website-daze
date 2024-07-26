import React from 'react'

const Footer = () => {
    return (
        <div className='px-16 pb-8' >
            <div className='border-t-1 border-black pt-12'>
                <div className='flex justify-between' >
                    <div className='text-2xl font-semibold'>
                        DAZE
                    </div>
                    <div className='text-2xl font-semibold font-sans'>
                        SOCIAL
                    </div>
                </div>
                <div className='flex py-4 justify-between' >
                    <div>
                        <ul className="flex text-xl gap-16 font-sans font-medium">
                            <li>Catalog</li>
                            <li>Log in</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col font-sans font-medium text-xl">
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </div>

                </div>

                <div>
                    <div className='text-xl text-gray-500 font-semibold font-sans'>
                        NEWSLETTERS
                    </div>
                </div>
                <div className='flex justify-between' >
                    <div className='py-2 font-sans text-gray-400'>
                        <div className='flex justify-between text-lg items-end' >daze.shop@gmail.com <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="290.000000pt" height="10.000000pt" viewBox="0 0 500.000000 100.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(100.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M4507 923 c-4 -3 -7 -20 -7 -37 0 -26 21 -52 142 -173 l143 -143-2368 0 -2367 0 0 -50 0 -50 
                                2372 0 2373 0 -148 -148 c-149 -150 -167 -178 -135 -210 29 -29 55 -10 251 186 151 151 197 203 197 222 
                                0 19 -45 70 -193 218 -166 166 -196 192 -223 192 -17 0 -34 -3 -37 -7z" />
                            </g>
                        </svg>  </div>

                        <div className='mt-2 bg-black h-px w-3/4' ></div>
                    </div>

                    <div className='py-2 text-xl font-medium font-sans'>
                        © 2024, All Right reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer