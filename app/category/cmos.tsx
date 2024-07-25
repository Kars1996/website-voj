import React from 'react'
import Clock from './components/clock'




const Cmos = () => {
  return (
    <div className=' flex gap-4 h-full'>

    <div className='w-[70%] flex flex-col gap-8 border-r-[2px] border-white h-full py-6 px-5'>
        <div className='flex'>
            <Clock />
        </div>

        <div className='px-4 text-2xl w-full flex flex-col'>
          <div className='flex w-full'>
          Name:<span className='w-full flex justify-end text-[#ffff55]'> voj/vojtikczhraje</span>
          </div>

          <div className='flex w-full'>
          Contact:<span className='w-full flex justify-end text-[#ffff55]'> voj/vojtikczhraje</span>
          </div>

        </div>

    </div>

    </div>
  )
}

export default Cmos