'use client';
import { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full fixed top-0 py-[3.8vh] px-[1.8vh]  sm:py-[3.78vh] sm:px-[7.77vh] flex items-center bor z-[100]'>
      <div className={`${isOpen ? 'translate-y-0' : 'translate-y-[-100%]'} duration-1000 transition-all ease-in-out fixed h-full w-full sm:w-[50vh] bg-black top-0 right-0`}>nice cock</div>

      <div className='text-[2vh] sm:text-[2.4vh]'>vojtikczhraje</div>
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? '' : ''
        } flex flex-col gap-[1vh] ml-auto cursor-pointer transition-all  duration-300 ease-in-out z-[50]`}
      >
        <div
          className={`${
            isOpen
              ? 'rotate-[45deg] translate-y-[4px]'
              : ''
          } w-[6vh] sm:w-[9vh] h-[0.2vh] bg-white transition-all duration-300 ease-in-out`}
        ></div>


        <div
          className={`${
            isOpen
              ? 'rotate-[-45deg] translate-y-[-8px]'
              : ''
          } w-[6vh] sm:w-[9vh] h-[0.2vh] bg-white transition-all duration-300 ease-in-out`}
        ></div>
      </div>
    </div>
  )
}

export default Navbar