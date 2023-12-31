import Image from 'next/image'
import React from 'react'
import beneoshop from '../../assets/company/beneoshop.svg'
import caspio from '../../assets/company/caspio.svg'
import hyperGrid from '../../assets/company/hyperGrid.svg'
import leotrippi from '../../assets/company/leotrippi.svg'


type Props = {}

function Company({}: Props) {
  return (
    <div className='mt-20'>
        <h1 className='text-[24px] text-[#000000] font-medium text-center'>You will be in good Company</h1>
        <div className='flex justify-evenly mt-3'>
            <Image className='hover:scale-110 cursor-pointer' src={beneoshop} alt='' height={185} width={185}/>
            <Image className='hover:scale-110 cursor-pointer' src={caspio} alt='' height={185} width={185}/>
            <Image className='hover:scale-110 cursor-pointer' src={hyperGrid} alt='' height={185} width={185}/>
            <Image className='hover:scale-110 cursor-pointer' src={leotrippi} alt='' height={185} width={185}/>

        </div>
    </div>
  )
}

export default Company