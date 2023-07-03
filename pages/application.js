import React from 'react'
import Image from 'next/image'
import FullGrowingPlace from '../public/images/Full Growing Place.png'
import { useFormik } from 'formik'
import { basicSchema } from '@/components/schemas'
import { PiArrowFatRightFill } from 'react-icons/Pi'

function Application() {

    const onSubmit = (values, actions) => {
        console.log(errors)
    }



    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            middleInitial: "",
            date: "",
            address: "",
            aptNUm: "",
            city: "",
            state: "",
            zipCode: "",
            phone: "",
            email: "",
            dateAvailable: "",
            socialSecurity: "",
            desiredPay: "",
            position: "",
            legalEligibility: "",
            felonyBool: "",
            felonyExplanation: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    console.log(errors)
  return (
    <div className='bg-blue-500 h-fit flex justify-center items-center pt-56'>
        <div className='bg-white h-[1000px] w-3/4 rounded-3xl mb-20 relative shadow-[inset_0_-1px_0px_12px_rgb(106,188,239)]'>
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
            <div className='w-[90%] m-auto mb-8 mt-24 h-[500px] bg-white relative z-10'>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className='w-20 h-28 inline-flex'>
                            <div className='rounded-full h-[50%] w-[70%] flex items-center border-2 border-gray-500 justify-center bg-pengblue z-10'>
                                <h1 className='text-3xl text-white font-concert select-none'>1.</h1>
                            </div>
                            <div className='w-0 h-0 rotate-[310deg] border-l-[15px] border-l-transparent border-t-[30px] border-t-pengblue border-r-[15px] border-r-transparent absolute top-8 left-9 z-20'></div>
                        </div>
                        <h1 className='text-gray-500 mt-4 mb-4 text-3xl select-none inline'>Applicant Information</h1>
                        <div className='grid grid-cols-3 grid-rows-7 gap-8'>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='firstName'>First Name:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.firstName} onChange={handleChange} onBlur={handleBlur} id="firstName" type="text" placeholder='John'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='lastName'>Last Name:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.lastName} onChange={handleChange} onBlur={handleBlur} id="lastName" type="text" placeholder='Doe'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='firstName'>Middel Initial:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.middleInitial} onChange={handleChange} onBlur={handleBlur} id="firstName" type="text" placeholder='B'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='firstName'>Address:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.address} onChange={handleChange} onBlur={handleBlur} id="firstName" type="text" placeholder='1234 example st'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='firstName'>Apartment/Unit #:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.aptNUm} onChange={handleChange} onBlur={handleBlur} id="firstName" type="text" placeholder='213'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='firstName'>City:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.city} onChange={handleChange} onBlur={handleBlur} id="firstName" type="text" placeholder='Your City'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='phone'>Phone:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.phone} onChange={handleChange} onBlur={handleBlur} id="phone" type="text" placeholder='e.g. +1-416-555-1212'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='email'>Email:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.email} onChange={handleChange} onBlur={handleBlur}  id="email" type="email" placeholder='example@gmail.com'></input>
                                {errors.email && touched.email && <p className='text-red-500'>* {errors.email}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='date'>Date Available:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.date} onChange={handleChange} onBlur={handleBlur}  id="date" type="date"></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='socialsecurity'>Social Security No.</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.socialSecurity} onChange={handleChange} onBlur={handleBlur} id="socialsecurity" type="text" placeholder='SSN'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='desiredpay'>Desired Pay:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.desiredPay} onChange={handleChange} onBlur={handleBlur} id="firstName" type="text" placeholder='Desired Pay'></input>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='position'>Position Applied For:</label>
                                <br></br>
                                <select className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.position} onChange={handleChange} onBlur={handleBlur} id="position">
                                    <option>CareTaker</option>
                                    <option>CareTaker 2</option>
                                    <option>CareTaker 3</option>
                                </select>
                            </div>
                            <div className='col-span-2 flex justify-between items-center'>
                                <h1 className='text-black font-semibold inline' htmlFor='position'>Are you legally eligible for employment in the US?</h1>
                                <div className='flex flex-col'>
                                    <label htmlfor='yes'>Yes</label>
                                    <input id='yes' type="checkbox"></input>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlfor='no'>No</label>
                                    <input id='no' type="checkbox"></input>
                                </div>
                            </div>
                            <div className='col-span-2 flex justify-between items-center'>
                                <h1 className='text-black font-semibold inline' htmlFor='position'>Have you ever been convicted of a felony?</h1>
                                <div className='flex flex-col'>
                                    <label htmlfor='yes'>Yes</label>
                                    <input id='yes' type="checkbox"></input>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlfor='no'>No</label>
                                    <input id='no' type="checkbox"></input>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <button type="submit" className='font-concert text-4xl rounded-xl text-white bg-gradient-to-t from-blue-500 to-custom border-b-gray-900 border-b-4 p-2 hover:border-0 hover:bg-gradient-to-t hover:from-pengblue hover:to-pengblue'>Next<PiArrowFatRightFill className='inline text-white'></PiArrowFatRightFill></button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Application