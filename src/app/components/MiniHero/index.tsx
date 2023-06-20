import React from 'react'

type Props = {}

function MiniHero({}: Props) {
  return (
    <div className='mt-[115px]'>
        <h1 className='text-[33px] font-bold text-[#252525] leading-[160%] text-center'>Lorem Ipsum is simply dummy text of the printing. </h1>
        <p className='pt-[32px] text-center text-[#868686] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br/> Lorem Ipsum has been the industry's</p>
    </div>
  )
}

export default MiniHero