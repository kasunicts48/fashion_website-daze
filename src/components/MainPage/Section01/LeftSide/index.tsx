import React from 'react'
import Image from 'next/image';

const LeftSide = () => {
    return (
        <div className='flex'>
            <div className='flex'>
                <div >
                    <Image
                        // className='h-fit'
                        width={800}
                        height={800}
                        alt="NextUI hero Image"
                        src="/images/pexels-visible-gain-447213792-19427624.jpg"
                    />
                </div>
                <div className='-translate-x-32	translate-y-60'>
                    <Image
                        width={300}
                        height={300}
                        alt="NextUI hero Image"
                        src="/images/pexels-maxim-shevchenko-130661832-10124891.jpg"
                    />
                </div>


            </div>

        </div>
    )
}

export default LeftSide