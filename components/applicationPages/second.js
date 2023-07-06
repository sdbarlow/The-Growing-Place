import React, { useContext }  from 'react'
import { useFormik } from 'formik'
import { secondPageSchema } from '../schemas'
import { PiArrowFatRightFill } from 'react-icons/Pi'
import ApplicationPageContext from '@/store/application-context'

function Second() {

  const appCtx = useContext(ApplicationPageContext);

  const onSubmit = (values, actions) => {
    appCtx.setApplicationStep('third')
    console.log('hello')
  }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: {
          highSchool: "",
          hsAddress: "",
          hsFrom: "",
          hsTo: "",
          hsGraduate: "",
          diploma: "",
          college: "",
          coAddress: "",
          coFrom: "",
          coTo: "",
          coGraduate: "",
          coDegree: "",
          other: "",
          oAddress: "",
          oFrom: "",
          oTo: "",
          oGraduate: "",
          oDegree: ""
      },
      validationSchema: secondPageSchema,
      onSubmit,
    })
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
            <div className='w-20 h-28 inline-flex'>
                <div className='rounded-full h-[50%] w-[70%] flex items-center border-2 border-gray-500 justify-center bg-pengblue z-10'>
                    <h1 className='text-3xl text-white font-concert select-none'>2.</h1>
                </div>
            <div className='w-0 h-0 rotate-[310deg] border-l-[15px] border-l-transparent border-t-[30px] border-t-pengblue border-r-[15px] border-r-transparent absolute top-8 left-9 z-20'></div>
            </div>
                <h1 className='text-gray-500 mt-4 mb-4 text-3xl select-none inline'>Education</h1>
                    <div className='grid grid-cols-1 grid-rows-4 gap-8'>
                        <div className='flex justify-between'>
                            <label className='text-black font-semibold select-none w-1/4' htmlFor='highschool'>High School:</label>
                            <input className={errors.highSchool && touched.highSchool ? 'border-red-600 border-2 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' : 'border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1'} value={values.highSchool} onChange={handleChange} onBlur={handleBlur} type='text' id='highSchool'></input>
                            <label className='text-black font-semibold select-none' htmlFor='address'>Address:</label>
                            <input type='text' className={errors.hsAddress && touched.hsAddress ? 'border-red-600 border-2 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' : 'border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1'} value={values.hsAddress} onChange={handleChange} onBlur={handleBlur} id='hsAddress'></input>
                        </div>
                        <div className='flex justify-between'>
                            <label className='text-black font-semibold select-none w-1/4' htmlFor='hsFrom'>From:</label>
                            <input type='date' className={errors.hsFrom && touched.hsFrom ? 'border-red-600 border-2 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' : 'border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1'} value={values.hsFrom} onChange={handleChange} onBlur={handleBlur} id='hsFrom'></input>
                            <label className='text-black font-semibold select-none' htmlFor='to'>To:</label>
                            <input type='date' className={errors.hsTo && touched.hsTo ? 'border-red-600 border-2 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' : 'border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1'} value={values.hsTo} onChange={handleChange} onBlur={handleBlur} id='hsTo'></input>
                            <h1 className='text-black font-semibold select-none' htmlFor='graduate'>Did you graduate?</h1>
                            <label className='text-black font-semibold select-none' htmlFor='yes'>YES</label>
                            <input type='checkbox' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='yes'></input>
                            <label className='text-black font-semibold select-none' htmlFor='no'>NO</label>
                            <input type='checkbox' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='no'></input>
                            <label className='text-black font-semibold select-none' htmlFor='diploma'>Diploma:</label>
                            <input type='text' className={errors.diploma && touched.diploma ? 'border-red-600 border-2 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' : 'border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1'} value={values.diploma} onChange={handleChange} onBlur={handleBlur} id='diploma'></input>            
                        </div>
                        <div className='flex justify-between'>
                            <label className='text-black font-semibold select-none w-1/4' htmlFor='college'>College:</label>
                            <input type='text' className={errors.college && touched.college ? 'border-red-600 border-2 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' : 'border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1'} value={values.college} onChange={handleChange} onBlur={handleBlur} id='college'></input>
                            <label className='text-black font-semibold select-none' htmlFor='address'>Address:</label>
                            <input type='text' className={errors.coAddress && touched.coAddress ? 'border-red-600 border-2 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' : 'border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1'} value={values.coAddress} onChange={handleChange} onBlur={handleBlur}  id='coAddress'></input>
                        </div>
                        <div className='flex justify-between'>
                            <label className='text-black font-semibold select-none w-1/4' htmlFor='from'>From:</label>
                            <input type='date' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' value={values.coFrom} onChange={handleChange} onBlur={handleBlur} id='coFrom'></input>
                            <label className='text-black font-semibold select-none' htmlFor='to'>To:</label>
                            <input type='date' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' value={values.coTo} onChange={handleChange} onBlur={handleBlur} id='to'></input>
                            <h1 className='text-black font-semibold select-none' htmlFor='graduate'>Did you graduate?</h1>
                            <label className='text-black font-semibold select-none' htmlFor='yes'>YES</label>
                            <input type='checkbox' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='yes'></input>
                            <label className='text-black font-semibold select-none' htmlFor='no'>NO</label>
                            <input type='checkbox' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='no'></input>
                            <label className='text-black font-semibold select-none' htmlFor='diploma'>Degree:</label>
                            <input type='text' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='degree'></input>            
                        </div>
                        <div className='flex justify-between'>
                            <label className='text-black font-semibold select-none w-1/4' htmlFor='highschool'>Other:</label>
                            <input type='text' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='highschool'></input>
                            <label className='text-black font-semibold select-none' htmlFor='address'>Address:</label>
                            <input type='text' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='address'></input>
                        </div>
                        <div className='flex justify-between'>
                            <label className='text-black font-semibold select-none w-1/4' htmlFor='from'>From:</label>
                            <input type='date' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='from'></input>
                            <label className='text-black font-semibold select-none' htmlFor='to'>To:</label>
                            <input type='date' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='to'></input>
                            <h1 className='text-black font-semibold select-none' htmlFor='graduate'>Did you graduate?</h1>
                            <label className='text-black font-semibold select-none' htmlFor='yes'>YES</label>
                            <input type='checkbox' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='yes'></input>
                            <label className='text-black font-semibold select-none' htmlFor='no'>NO</label>
                            <input type='checkbox' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='no'></input>
                            <label className='text-black font-semibold select-none' htmlFor='diploma'>Degree:</label>
                            <input type='text' className='border-2 border-gray-400 p-2 h-1/2 w-full rounded-lg grid-col-1 row-span-1' id='degree'></input>            
                        </div>
                        <div className='flex justify-end'>
                            <button type="submit" className='font-concert text-4xl rounded-xl text-white bg-gradient-to-t from-blue-500 to-custom border-b-gray-900 border-b-4 p-2 hover:border-0 hover:bg-gradient-to-t hover:from-pengblue hover:to-pengblue'>Next<PiArrowFatRightFill className='inline text-white'></PiArrowFatRightFill></button>
                        </div>
                    </div>
          </form>
  )
}

export default Second