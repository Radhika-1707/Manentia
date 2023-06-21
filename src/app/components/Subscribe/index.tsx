import Image from 'next/image'
import React from 'react'

type Props = {}

function Subscribe({ }: Props) {
    return (
        <>
            <div  className=' bg-cover bg-image' style={{backgroundImage:"url('/bg.svg')"}}>

                <h1 className='text-[30px] text-center font-semibold  p-20 pt-40'>Lorem Ipsum is simply dummy  <br />text of the printing. </h1>

                <div className=' flex justify-center'>
                    <input type='text' className='w-[532px]  h-[67px] rounded-[10px] text-start px-5 text-[16px] shadow-md mx-3' placeholder='Enter your email' />
                    <button className='w-[173px] h-[67px] bg-[#000000] text-[#FFF4F4] uppercase rounded-[10px] text-[16px] font-medium'>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Subscribe