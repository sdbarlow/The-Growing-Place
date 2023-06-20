import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GrowingPlaceText from '../../public/images/The Growing Place.png'
import classes from './header.module.css'


function Header() {
  
  const [dropdowns, setDropDowns] = useState([
    { isHovered: false },
    { isHovered: false },
    { isHovered: false },
    { isHovered: false },
  ]);

  const handleMouseOver = (id) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[id].isHovered = true;
    setDropDowns(updatedDropdowns)
  };

  const handleMouseOut = (id) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[id].isHovered = false;
    setDropDowns(updatedDropdowns)
  };



  return (
    <div className='flex justify-between h-28 w-full bg-transparent fixed pt-4 pr-10 pl-4 z-20'>
        <div className='h-full w-1/3'>
            <Link href='/'>
                <Image src={GrowingPlaceText} height={900} width={360} className='object-cover'/>
            </Link>
        </div>
        <div className='flex w-1/2 items-center justify-between'>
            <Link className='text-white ' href="/">ABOUT</Link>
            <div onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut(0)}>
            <h1 className='text-white hover:cursor-pointer'>OUR SCHOOL</h1>
              <div className={dropdowns[0].isHovered ? 'animate-dropdown flex w-1/12 justify-left h-fit absolute bg-white' : 'absolute'}>
                <ul className={dropdowns[0].isHovered ? 'animate-reveal' : 'opacity-0'}>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>Hello</li>
                </ul>
              </div>
            </div>
            <div onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)}>
            <h1 className='text-white hover:cursor-pointer' >PROGRAMS</h1>
            <div className={dropdowns[1].isHovered ? 'animate-dropdown flex w-1/12 justify-left h-fit absolute bg-white' : 'absolute'}>
                <ul id='1' onBlur={handleMouseOut} className={dropdowns[1].isHovered ? 'animate-reveal' : 'opacity-0'}>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>Hello</li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>My </li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>List</li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>Is</li>
                </ul>
              </div>
            </div>
            <div onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)}>
            <h1 className='text-white hover:cursor-pointer'>CONTACT US</h1>
            <div className={dropdowns[2].isHovered ? 'animate-dropdown flex w-1/12 justify-left h-fit absolute bg-white' : 'absolute'}>
                <ul className={dropdowns[2].isHovered ? 'animate-reveal' : 'opacity-0'}>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>Hello</li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>My </li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>List</li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>Is</li>
                </ul>
              </div>
            </div>
            <div onMouseOver={() => handleMouseOver(3)} onMouseOut={() => handleMouseOut(3)}>
            <h1 className='text-white hover:cursor-pointer'>EMPLOYMENT</h1>
            <div className={dropdowns[3].isHovered ? 'animate-dropdown flex w-1/12 justify-left h-fit absolute bg-white' : 'absolute'}>
                <ul className={dropdowns[3].isHovered ? 'animate-reveal' : 'opacity-0'}>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>Hello</li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>My </li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>List</li>
                  <li className='hover:text-blue-500 hover:cursor-pointer'>Is</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header