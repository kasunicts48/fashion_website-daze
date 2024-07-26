"use client";
import React from 'react'
import Image from 'next/image';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Section01 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <LeftSide />
            <RightSide />
        </div>

    )
}

export default Section01