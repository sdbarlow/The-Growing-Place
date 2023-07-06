import React, { useState, useContext } from 'react'
import Image from 'next/image'
import FullGrowingPlace from '../public/images/Full Growing Place.png'
import { useFormik } from 'formik'
import { basicSchema } from '@/components/schemas'
import First from '@/components/applicationPages/first'
import Second from '@/components/applicationPages/second'
import Third from '@/components/applicationPages/third'
import Fourth from '@/components/applicationPages/fourth'
import ApplicationPageContext from '@/store/application-context'

function Application() {

    const appCxt = useContext(ApplicationPageContext)

    const currentPage = appCxt.page
    const hasErrors = appCxt.hasErrors

    console.log(currentPage)


  return (
    <div className='bg-blue-500 h-fit flex flex-col justify-center items-center pt-40'>
        <div className="w-1/2 mx-auto my-0 pb-8">	
            <div className="flex pb-3">
                <div className="flex-1">
                </div>

                <div className="flex-1">
                    <div className="w-10 h-10 bg-white mx-auto rounded-full text-lg text-white flex items-center">
                        <span className="text-blue-400 text-center w-full">1<i class="fa fa-check w-full fill-current white"></i></span>
                    </div>
                </div>


                <div className="w-1/3 px-4 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-white rounded items-center align-middle align-center flex-1">
                        <div className="bg-white text-xs leading-none py-1 text-center rounded text-blue-400" style={{width: '100%'}}></div>
                    </div>
                </div>
            
                
                <div className="flex-1">
                    <div className="w-10 h-10 bg-white mx-auto rounded-full text-lg text-white flex items-center">
                        <span className="text-blue-400 text-center w-full">2<i class="fa fa-check w-full fill-current white"></i></span>
                    </div>
                </div>
            
                <div className="w-1/3 px-4 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-white rounded items-center align-middle align-center flex-1">
                        <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width: '20%'}}></div>
                    </div>
                </div>
            
                <div className="flex-1">
                    <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                        <span className="text-blue-400 text-center w-full">3</span>
                    </div>
                </div>
            
            
                <div className="w-1/3 px-4 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-white rounded items-center align-middle align-center flex-1">
                        <div className="bg-blue-400 text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width: '0%'}}></div>
                    </div>
                </div>


                <div className="flex-1">
                    <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                        <span className="text-blue-400 text-center w-full">4</span>
                    </div>
                </div>
            
            
                <div className="flex-1">
                </div>		
            </div>
            
            <div className="flex text-xs content-center text-center">
                <div className="w-1/4">
                    Applicant Information
                </div>
                
                <div className="w-1/4">
                    Education
                </div>
                
                <div className="w-1/4">
                    Previous Employment
                </div>
                
                <div className="w-1/4">
                    Confirmation
                </div>			
            </div>
        </div>
        <div className={hasErrors ? 'bg-white h-[1150px] w-3/4 rounded-3xl mb-20 relative shadow-[inset_0_-1px_0px_12px_rgb(106,188,239)]' : 'bg-white h-[1000px] w-3/4 rounded-3xl mb-20 relative shadow-[inset_0_-1px_0px_12px_rgb(106,188,239)]'}>     
        <div className='bg-blue-500 border-b-8 border-r-8 border-custom rounded-br-3xl h-1/5 w-1/4 absolute top-0 left-0'>
                <div className='w-full h-full bg-gradient-radial from-white via-blue-500 via-70% flex items-center pt-16 justify-center'>
                    <Image src={FullGrowingPlace} height={900} width={360} className='select-none'></Image>
                </div>
                <div className='rounded-3xl h-10 w-10 bg-blue-500 absolute top-[-5px] right-[-30px]'></div>
                <div className='rounded-tl-3xl h-36 w-24 bg-white absolute top-[0px] right-[-96px] shadow-[inset_8px_11px_0px_0px_rgb(106,188,239)]'></div>
                <div className='rounded-3xl h-10 w-10 bg-blue-500 absolute bottom-[-30px] left-[-15px]'></div>
                <div className='rounded-tl-3xl h-36 w-[30%] bg-white absolute bottom-[-144px] shadow-[inset_12px_8px_0px_0px_rgb(106,188,239)] left-0'></div>
            </div>
            <div className='bg-white ml-[29%] h-[13%] w-2/3 flex flex-col items-center justify-end shadow-[inset_8px_11px_0px_0px_rgb(106,188,239)]'>
                <h1 className='text-pengblue text-6xl font-sniglet z-10 select-none'>Employment Application</h1>
            </div>
            <div className={hasErrors ? "w-[90%] m-auto mb-8 mt-28 h-[500px] bg-white relative z-10" : "w-[90%] m-auto mb-8 mt-24 h-[500px] bg-white relative z-10"}>
            {currentPage === 'first' ? <First/> : currentPage === "second" ? <Second/> : currentPage === "third" ? <Third/> : currentPage === 'fourth' ? <Fourth/> : null}
            </div> 
        </div>
    </div>
  )
}

export default Application