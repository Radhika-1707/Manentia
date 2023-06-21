import React from 'react'
import { SocialIcon } from 'react-social-icons';
type Props = {}

function Footer({ }: Props) {
    return (
        <div className=''>
            <div className='grid grid-cols-4 gap-2 p-20'>
                <div className=' text-[#515151] text-[16px] leading-[24px] font-normal'>
                    <p className='text-[16px] text-[#00329B] font-bold mb-5'>LOGO</p>
                    <p>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. </p>
                    <p className='pt-[25px]'>@Lorem</p>
                </div>
                <div className=' text-center text-[#515151] text-[16px] leading-[24px] font-normal'>
                    <p className='mb-5 text-[#000000] font-medium'>About us</p>
                    <p className='mt-2'>Lorem</p>
                    <p className='mt-2'>Portfolio</p>
                    <p className='mt-2'> Careers</p>
                    <p className='mt-2'> Contact us</p>
                </div>
                <div className=' text-start text-[#515151] text-[16px] leading-[24px] font-normal'>
                    <p className='mb-5 text-[#000000] font-medium'>Contact us</p>
                    <p>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. </p>
                    <p className='pt-[25px]'>+908 89097 890</p>

                </div>
                <div className=' flex justify-evenly mt-auto '>
                    <SocialIcon
                        url='https://facebook.com/jaketrent'
                        fgColor='black'
                        bgColor='#FFFFFF'
                        className='shadow-xl rounded-full'
                        style={{height:35 , width:35}}

                    />
                    <SocialIcon
                        url='https://instagram.com/jaketrent'
                        fgColor='black'
                        bgColor='#FFFFFF'
                        className='shadow-xl rounded-full'
                        style={{height:35 , width:35}}
                        


                    />    <SocialIcon
                        url='https://twitter.com/jaketrent'
                        fgColor='black'
                        bgColor='#FFFFFF'
                        className='shadow-xl rounded-full'
                        style={{height:35 , width:35}}


                    />    <SocialIcon
                        url='https://linkedin.com/jaketrent'
                        fgColor='black'
                        bgColor='#FFFFFF'
                        className='shadow-xl rounded-full'
                        style={{height:35 , width:35}}


                    />
                </div>
            </div>
            <div className='border  border-t-[2px]'>
                <p className='text-center pt-[30px] font-normal pb-10 text-[13px] text-[#686868]'>Copyright ® 2021 Lorem All rights Rcerved</p>
            </div>
        </div>
    )
}

export default Footer