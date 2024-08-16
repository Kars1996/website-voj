'use client';
import { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full py-[3.8vh] px-[1.8vh]  sm:py-[3.78vh] sm:px-[7.77vh] flex items-center p-'>
        <div className='text-[2vh] sm:text-[2.4vh]'>vojtikczhraje</div>

        <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? '' : ''} flex flex-col gap-[1vh] ml-auto cursor-pointer transition-all duration-300 ease-in-out`}>
            <div className={`${isOpen ? 'rotate-[45deg] sm:translate-y-[15px] translate-y-[12px]' : ''} w-[6vh] sm:w-[9vh] h-[0.2vh] bg-white transition-all duration-300 ease-in-out`}></div>
            
            <div className={`${isOpen ? 'rotate-[-45deg]  ' : ''} w-[6vh] sm:w-[9vh] h-[0.2vh] bg-white transition-all duration-300 ease-in-out`}></div>
        </div>
    </div>
  )
}

export default Navbar