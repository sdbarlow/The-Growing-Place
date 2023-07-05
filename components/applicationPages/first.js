import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '@/components/schemas'
import { PiArrowFatRightFill } from 'react-icons/Pi'
import ApplicationPageContext from '@/store/application-context'

function First() {

    const appCtx = useContext(ApplicationPageContext);

    const onSubmit = (values, actions) => {
        appCtx.setApplicationStep('second')
        console.log('hello')
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            middleInitial: "",
            date: "",
            address: "",
            aptNum: "",
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
        // validationSchema: basicSchema,
        onSubmit,
    })

  return (
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
                                <input className={errors.firstName && touched.firstName ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.firstName} onChange={handleChange} onBlur={handleBlur} id="firstName" type="text" placeholder='John'></input>
                                {errors.firstName && touched.firstName && <p className='text-red-500'>* {errors.firstName}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='lastName'>Last Name:</label>
                                <br></br>
                                <input className={errors.lastName && touched.lastName ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.lastName} onChange={handleChange} onBlur={handleBlur} id="lastName" type="text" placeholder='Doe'></input>
                                {errors.lastName && touched.lastName && <p className='text-red-500'>* {errors.lastName}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='middleInitial'>Middel Initial:</label>
                                <br></br>
                                <input className={errors.middleInitial && touched.middleInitial ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.middleInitial} onChange={handleChange} onBlur={handleBlur} id="middleInitial" type="text" placeholder='B'></input>
                                {errors.middleInitial && touched.middleInitial && <p className='text-red-500'>* {errors.middleInitial}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='address'>Address:</label>
                                <br></br>
                                <input className={errors.address && touched.address ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.address} onChange={handleChange} onBlur={handleBlur} id="address" type="text" placeholder='1234 example st'></input>
                                {errors.address && touched.address && <p className='text-red-500'>* {errors.address}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='aptNum'>Apartment/Unit #:</label>
                                <br></br>
                                <input className={errors.aptNum && touched.aptNum ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.aptNUm} onChange={handleChange} onBlur={handleBlur} id="aptNum" type="text" placeholder='213'></input>
                                {errors.aptNum && touched.aptNum && <p className='text-red-500'>* {errors.aptNum}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='city'>City:</label>
                                <br></br>
                                <input className={errors.city && touched.city ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.city} onChange={handleChange} onBlur={handleBlur} id="city" type="text" placeholder='Your City'></input>
                                {errors.city && touched.city && <p className='text-red-500'>* {errors.city}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='phone'>Phone:</label>
                                <br></br>
                                <input className={errors.phone && touched.phone ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.phone} onChange={handleChange} onBlur={handleBlur} id="phone" type="text" placeholder='e.g. +1-416-555-1212'></input>
                                {errors.phone && touched.phone && <p className='text-red-500'>* {errors.phone}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='email'>Email:</label>
                                <br></br>
                                <input className={errors.email && touched.email ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.email} onChange={handleChange} onBlur={handleBlur}  id="email" type="email" placeholder='example@gmail.com'></input>
                                {errors.email && touched.email && <p className='text-red-500'>* {errors.email}</p> }
                            </div>
                            {/* <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='date'>Date Available:</label>
                                <br></br>
                                <input className={errors.dateAvailable && touched.dateAvailable ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.date} onChange={handleChange} onBlur={handleBlur}  id="date" type="date"></input>
                                {errors.dateAvailable && touched.dateAvailable && <p className='text-red-500'>* {errors.dateAvailable}</p> }
                            </div> */}
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='socialSecurity'>Social Security No.</label>
                                <br></br>
                                <input className={errors.socialSecurity && touched.socialSecurity ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.socialSecurity} onChange={handleChange} onBlur={handleBlur} id="socialSecurity" type="text" placeholder='SSN'></input>
                                {errors.socialSecurity && touched.socialSecurity && <p className='text-red-500'>* {errors.socialSecurity}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='desiredPay'>Desired Pay:</label>
                                <br></br>
                                <input className={errors.desiredPay && touched.desiredPay ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.desiredPay} onChange={handleChange} onBlur={handleBlur} id="desiredPay" type="text" placeholder='Desired Pay'></input>
                                {errors.desiredPay && touched.desiredPay && <p className='text-red-500'>* {errors.desiredPay}</p> }
                            </div>
                            <div className='flex flex-col justify-between'>
                                <label className='text-black font-semibold select-none' htmlFor='position'>Position Applied For:</label>
                                <br></br>
                                <select className={errors.position && touched.position ? "border-2 border-red-600 p-2 rounded-lg grid-col-1 row-span-1" : "border-2 border-gray-400 p-2 rounded-lg grid-col-1 row-span-1"} value={values.position} onChange={handleChange} onBlur={handleBlur} id="position">
                                    <option>CareTaker</option>
                                    <option>CareTaker 2</option>
                                    <option>CareTaker 3</option>
                                </select>
                                {errors.position && touched.position && <p className='text-red-500'>* {errors.position}</p> }
                            </div>
                            {/* <div className='col-span-2 flex justify-between items-center'>
                                <h1 className='text-black font-semibold inline'>Are you legally eligible for employment in the US?</h1>
                                {errors.legalEligibility && touched.legalEligibility && <p className='text-red-500'>* {errors.legalEligibility}</p> }
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
                                <h1 className='text-black font-semibold inline'>Have you ever been convicted of a felony?</h1>
                                {errors.felonyBool && touched.felonyBool && <p className='text-red-500'>* {errors.felonyBool}</p> }
                                <div className='flex flex-col'>
                                    <label htmlfor='yes'>Yes</label>
                                    <input id='yes' type="checkbox"></input>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlfor='no'>No</label>
                                    <input id='no' type="checkbox"></input>
                                </div>
                            </div> */}
                            <div className='flex justify-end'>
                                <button type="submit" className='font-concert text-4xl rounded-xl text-white bg-gradient-to-t from-blue-500 to-custom border-b-gray-900 border-b-4 p-2 hover:border-0 hover:bg-gradient-to-t hover:from-pengblue hover:to-pengblue'>Next<PiArrowFatRightFill className='inline text-white'></PiArrowFatRightFill></button>
                            </div>
                        </div>
                    </form>
  )
}

export default First