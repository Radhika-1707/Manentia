import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    backgroundColor:string;
    heading:string,
    image:StaticImageData

}

function TabComponent({ backgroundColor ,heading ,image}: Props) {
    return (
        <div className='flex'>

            <div className={`${backgroundColor} w-[83px] h-[82px] rounded-[20px] mx-2`}>
                <div className='flex justify-center items-center mt-3'>
                    <Image className='' src={image} alt="" height={43} width={43} />
                </div>

            </div>
            <div className='flex flex-col'>
                <p className='text-[20px] leading-[175%] font-medium text-[#000000]'>{heading}</p>
                <p className='text-[15px] mt-[-10px] text-[#969696] leading-[175%] font-normal'>Lorem Ipsum is simply</p>
            </div>
        </div>

    )
}

export default TabComponent