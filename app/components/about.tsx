import React from 'react'

const About = () => {
  return (
    <div className='h-[100vh] relative flex justify-center items-center'>
        <div className='text-[3.6vh] sm:text-[5vh] xl:text-[12.5vh] text-center z-10'>
            Freelance developer
        </div>
        <div className='flex justify-center h-full w-full absolute flex-wrap gap-y-[20vh] md:gap-y-[10vh] xl:gap-x-[5vh] xl:flex-nowrap'>
            <div className='flex justify-center items-center mx-[10vh] z-0 w-full sm:w-[calc(50%-20vh)] xl:w-1/4'>
                <img className='absolute' src="line.svg" />
                <div className='absolute flex justify-center items-center sm:w-[24vh] sm:h-[31vh] xl:w-[35vh] xl:h-[45vh]'>
                    <img className='absolute' src="placeholder.png" />
                    <div className='relative text-center sm:text-[2vh] xl:text-[2.4vh] tracking-wide mx-3'>1 year experience</div>
                </div>
            </div>
            <div className='flex justify-center items-center mx-[10vh] z-0 w-full sm:w-[calc(50%-20vh)] xl:w-1/4'>
                <img className='absolute' src="line.svg" />
                <div className='absolute flex justify-center items-center sm:w-[24vh] sm:h-[31vh] xl:w-[35vh] xl:h-[45vh]'>
                    <img className='absolute' src="placeholder.png" />
                    <div className='relative text-center sm:text-[2vh] xl:text-[2.4vh] tracking-wide mx-3'>2 years experience</div>
                </div>
            </div>
            <div className='flex justify-center items-center mx-[10vh] z-0 w-full sm:w-[calc(50%-20vh)] xl:w-1/4'>
                <img className='absolute' src="line.svg" />
                <div className='absolute flex justify-center items-center sm:w-[24vh] sm:h-[31vh] xl:w-[35vh] xl:h-[45vh]'>
                    <img className='absolute' src="placeholder.png" />
                    <div className='relative text-center sm:text-[2vh] xl:text-[2.4vh] tracking-wide mx-3'>3 years experience</div>
                </div>
            </div>
            <div className='flex justify-center items-center mx-[10vh] z-0 w-full sm:w-[calc(50%-20vh)] xl:w-1/4'>
                <img className='absolute' src="line.svg" />
                <div className='absolute flex justify-center items-center sm:w-[24vh] sm:h-[31vh] xl:w-[35vh] xl:h-[45vh]'>
                    <img className='absolute' src="placeholder.png" />
                    <div className='relative text-center sm:text-[2vh] xl:text-[2.4vh] tracking-wide mx-3'>4 years experience</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About