import React from 'react'
import Image from 'next/image'


const InstagramGallery = () => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <div className='flex gap-4'>
                    <div>
                        <Image height={300} width={300} className="h-auto max-w-full" src={"/images/pexels-lokmansevim-14535100.jpg"} alt="" />
                    </div>
                    <div>
                        <Image height={300} width={300} className="h-auto max-w-full" src={"/images/sara-dabaghian-ZAiN5wnsR0E-unsplash.jpg"} alt="" />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <Image height={300} width={300} className="h-auto max-w-full" src={"/images/valerie-elash-jBQdEiQNE24-unsplash.jpg"} alt="" />
                    </div>
                    <div>
                        <Image height={300} width={300} className="h-auto max-w-full" src={"/images/pexels-flat-hito-294826-904350.jpg"} alt="" />
                    </div>
                </div>
                <div className='flex gap-4'></div>
                <div className='flex gap-4'></div>
                <div className='flex gap-4'>
                    <div>
                        <Image height={300} width={300} className="h-auto max-w-full" src={"/images/woman-8512146_1280.jpg"} alt="" />
                    </div>
                    <div>
                        <Image height={300} width={300} className="h-auto max-w-full" src={"/images/pexels-valeriya-965990.jpg"} alt="" />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <Image height={300} width={300} className="h-auto max-w-full" src={"/images/pexels-monicore-134064.jpg"} alt="" />
                    </div>
                    <div>
                        <Image height={300} width={300} className="h-auto max-w-full" src={"/images/woman-8637535_1280.jpg"} alt="" />
                    </div>
                </div>


            </div>




        </>
    )
}

export default InstagramGallery