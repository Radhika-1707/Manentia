import React from 'react'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='flex justify-between items-center bg-white h-[70px] w-full p-5 '>
            <div className=''>
                <p className=' font-bold text-[29px] leading-[44px] text-[#1090CB]'>LOGO</p>
            </div>
            <div className=' flex justify-evenly items-center '>

                    <p className='mx-8  text-base font-medium cursor-pointer text-[#1090CB]'>Home</p>
                    <p className='mx-8  text-base font-medium cursor-pointer'>About us</p>
                    <p className='mx-8  text-base font-medium cursor-pointer'>Services</p>
                    <p className='mx-8  text-base font-medium cursor-pointer'>Blog</p>
                    <p className='mx-8  text-base font-medium cursor-pointer bg-[#1090CB] rounded-md text-white w-[125px] h-[41px] flex justify-center items-center'>Contact us</p>
            </div>
        </div>
    )
}

export default Header