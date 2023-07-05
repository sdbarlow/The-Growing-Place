import React, { useContext }  from 'react'
import { useFormik } from 'formik'
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
                                <h1 className='text-3xl text-white font-concert select-none'>2.</h1>
                            </div>
                            <div className='w-0 h-0 rotate-[310deg] border-l-[15px] border-l-transparent border-t-[30px] border-t-pengblue border-r-[15px] border-r-transparent absolute top-8 left-9 z-20'></div>
                        </div>
                        <h1 className='text-gray-500 mt-4 mb-4 text-3xl select-none inline'>Education</h1>
                        <div className='grid grid-cols-3 grid-rows-7 gap-8'>
                            <div className='flex justify-end'>
                                <button type="submit" className='font-concert text-4xl rounded-xl text-white bg-gradient-to-t from-blue-500 to-custom border-b-gray-900 border-b-4 p-2 hover:border-0 hover:bg-gradient-to-t hover:from-pengblue hover:to-pengblue'>Next<PiArrowFatRightFill className='inline text-white'></PiArrowFatRightFill></button>
                            </div>
                        </div>
                  </form>
  )
}

export default Second