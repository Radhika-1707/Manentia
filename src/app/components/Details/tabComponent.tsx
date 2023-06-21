import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    backgroundColor:string;
    heading:string,
    image:StaticImageData

}

function TabComponent({ backgroundColor ,heading ,image}: Props) {
    return (
        <div className='flex items-center  '>

            <div className={`${backgroundColor} flex justify-center items-center w-[83px] h-[82px] rounded-[20px] mx-2 `}>
                <div className='cursor-pointer'>
                    <Image className='hover:scale-110' src={image} alt="" height={43} width={43}  />
                </div>

            </div>
            <div className='flex flex-col'>
                <p className='text-[20px] leading-[175%] md:text-[18px] md:leading-[42px] font-medium text-[#000000]'>{heading}</p>
                <p className='text-[15px] mt-[-10px] text-[#969696] leading-[175%] font-normal'>Lorem Ipsum is simply</p>
            </div>
        </div>

    )
}

export default TabComponent