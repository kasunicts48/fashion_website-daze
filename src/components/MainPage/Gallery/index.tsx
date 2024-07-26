import React from 'react'
import Image from 'next/image'

const Gallery = () => {
    return (
        <div className='p-5 md:p-10' >
            <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8' >
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-michaela-vreja-1875214-3475889.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/joshua-rawson-harris-papgZtEFaAA-unsplash.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/joshua-rondeau-MO8q5itkuc0-unsplash.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/kyle-smith-tlowJ-oYAjU-unsplash.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-visible-gain-447213792-19248891.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-michaela-vreja-1875214-3475889.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-michaela-vreja-1875214-3475889.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-michaela-vreja-1875214-3475889.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-michaela-vreja-1875214-3475889.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-michaela-vreja-1875214-3475889.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-michaela-vreja-1875214-3475889.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Image
                    alt='product image'
                    height={500}
                    width={500}
                    src={"/images/pexels-michaela-vreja-1875214-3475889.jpg"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
        </div>
    )
}

export default Gallery