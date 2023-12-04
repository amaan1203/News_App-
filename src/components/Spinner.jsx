import React from 'react'
import { HashLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className='w-[100vw]  translate-y-[-100]   h-[100vh] flex justify-center items-center'>

       <HashLoader color="#9c001d" size={100} /> 

    </div>
  )
}

export default Spinner