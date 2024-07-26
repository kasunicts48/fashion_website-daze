import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
const products = [
    {
        id: 1,
        name: 'Top Blouse',
        href: '#',
        imageSrc: '/images/pexels-panther-2092474.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'T-Shirt',
        href: '#',
        imageSrc: '/images/joshua-rawson-harris-papgZtEFaAA-unsplash.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/images/pexels-461430699-15628215.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Rondeau',
        href: '#',
        imageSrc: '/images/joshua-rondeau-MO8q5itkuc0-unsplash.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Francisco',
        href: '#',
        imageSrc: '/images/pexels-francisco-rivera-1446873-2853509.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Red Dress',
        href: '#',
        imageSrc: '/images/pexels-jeff-denlea-721292-4614104.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Green Loam',
        href: '#',
        imageSrc: '/images/pexels-kowalievska-1040173.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]
const Section04 = () => {
    return (
        <div>
            <div className='relative flex-col px-16 py-24'>
                <div className='text-5xl italic'>Best Sellers</div>
                <div >
                    <div className="p-0 md:px-0 sm:px-6 sm:py-12 ">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-7 xl:gap-x-8">
                            {/* map start */}
                            {products.map((product, key) =>
                            (
                                <div key={key} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 group-hover:scale-105 lg:h-80">
                                        <Image
                                            alt={product.imageAlt}
                                            height={300}
                                            width={300}
                                            src={product.imageSrc}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-m text-gray-600 font-sans">
                                                <a href={"product.href"}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    Glasees
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 font-sans">{`$ 120,00 `}</p>
                                    </div>
                                </div>
                            )
                            )}

                            {/* map end */}

                            <div className='absolute flex items-center gap-4 text-xl font-sans float-right hover:font-semibold hover:cursor-pointer bottom-24 left-16'>SHOP NOW <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="50.000000pt" height="10.000000pt" viewBox="0 0 500.000000 100.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M4507 923 c-4 -3 -7 -20 -7 -37 0 -26 21 -52 142 -173 l143 -143-2368 0 -2367 0 0 -50 0 -50 
                                2372 0 2373 0 -148 -148 c-149 -150 -167 -178 -135 -210 29 -29 55 -10 251 186 151 151 197 203 197 222 
                                0 19 -45 70 -193 218 -166 166 -196 192 -223 192 -17 0 -34 -3 -37 -7z" />
                                </g>
                            </svg>  </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative grid grid-cols-2 px-16 py-4 justify-between'>
                <div className='flex items-center justify-center '>
                    <div className='content-around' >
                        <div className='text-6xl font-normal' >
                            About<span className='font-medium italic'> brand</span>
                        </div>
                        <div className='py-8 font-sans text-xl'>
                            We strive ensure that our collection remain <br />
                            relevant over the years. Modern Muse combines <br />
                            classic silhouettes with modern elements, creating<br />
                            a timelss style that modern elements, creating <br />
                            for any occasion.
                        </div>
                        <div className='py-0 font-sans text-xl'>
                            We stay ahead of fashion trends while remaining<br />
                            GGture to our principles and ideals.<br />
                        </div>
                        <div className='absolute flex items-center gap-4 text-xl font-sans float-right hover:font-semibold hover:cursor-pointer bottom-16 left-64'>LEARN  MORE <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="50.000000pt" height="10.000000pt" viewBox="0 0 500.000000 100.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M4507 923 c-4 -3 -7 -20 -7 -37 0 -26 21 -52 142 -173 l143 -143-2368 0 -2367 0 0 -50 0 -50 
                                2372 0 2373 0 -148 -148 c-149 -150 -167 -178 -135 -210 29 -29 55 -10 251 186 151 151 197 203 197 222 
                                0 19 -45 70 -193 218 -166 166 -196 192 -223 192 -17 0 -34 -3 -37 -7z" />
                            </g>
                        </svg> </div>

                    </div>

                </div>
                <div className='flex justify-end' >
                    <Image
                        alt='product image'
                        height={800}
                        width={800}
                        src={"/images/pexels-visible-gain-447213792-19248891.jpg"}
                    // className=""
                    />
                </div>
            </div>
        </div>


    )
}

export default Section04