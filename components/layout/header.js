import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GrowingPlaceText from '../../public/images/The Growing Place.png'
import classes from './header.module.css'


function Header() {
  return (
    <div className='flex justify-between h-28 w-full bg-transparent fixed pt-4 pr-10 pl-4'>
        <div className='h-full w-1/3'>
            <Link href='/'>
                <Image src={GrowingPlaceText} height={900} width={360} className='object-cover'/>
            </Link>
        </div>
        <div className='flex w-1/2 items-center justify-between'>
            <Link href="/">Option1</Link>
            <h1 className='text-white'>Option1</h1>
            <h1 className='text-white'>Option1</h1>
            <h1 className='text-white'>Option1</h1>
            <h1 className='text-white'>Option1</h1>
        </div>
    </div>
  )
}

export default Header