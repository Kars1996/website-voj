'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link'

const Hero = () => {

    const imageRefs = useRef<HTMLImageElement[]>([]);
  
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;

      imageRefs.current.forEach((imageRef, index) => {
        if (imageRef) {
          const speed = (index + 1) * 0.3; // Adjust speed multiplier for each image
          const maxX = (index + 1) * 20; // Max translation X (can be customized)
          const maxY = (index + 1) * 20; // Max translation Y (can be customized)

          gsap.to(imageRef, {
            x: (clientX / window.innerWidth) * maxX - maxX / 2,
            y: (clientY / window.innerHeight) * maxY - maxY / 2,
            ease: 'power3.out',
            duration: speed,
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='flex justify-center items-center w-full p-4 mt-[17.5vh] gap-[3vh]'>


        <div className='flex items-center h-[38.5vh] w-[47vh]'>
            <img
                src='pfp.png'
                alt='pfp'
                className='h-[39vh] absolute z-10 translate-x-[4vh]'
                ref={(el: HTMLImageElement | null) => { if (el) imageRefs.current[0] = el; }}
            />
            <img
                src='pfp.png'
                alt='pfp'
                className='h-[43vh] absolute z-0 opacity-50 translate-x-[2vh]'
                ref={(el: HTMLImageElement | null) => { if (el) imageRefs.current[1] = el; }}
            />
            <img
                src='pfp.png'
                alt='pfp'
                className='h-[47vh] absolute -z-10 opacity-25'
                ref={(el: HTMLImageElement | null) => { if (el) imageRefs.current[2] = el; }}
            />
            </div>

        
        
        <div className='flex flex-col gap-[1vh] text-[#818494]'>

            <img className='translate-y-[-5vh] select-none hidden absolute xl:block' src="vojtikczhraje_arrow.svg" alt="bigassarrow"  />

            <div className='text-[2.6vh] px-[1vh]'>bring your ideas to...</div>
            <div className=' h-[14.2vh] px-[2vh] text-[9.6vh] text-[#0C0C14] relative z-20 tracking-wider'>reality</div>

            <div className='absolute w-[48vh] h-[13.2vh]  bg-[#3C3C54] translate-y-[5.5vh] rounded-[0.8vh]'></div>

            <div className='flex justify-center gap-[3.8vh] text-[2.2vh] text-white px-[1vh]'>
            <Link className='text-white' href='https://github.com/vojtikczhraje'>github</Link>
            <div>/</div>
            <Link className='text-white' href='https://github.com/vojtikczhraje'>discord</Link>
            <div>/</div>
            <Link className='text-white' href='https://github.com/vojtikczhraje'>mail</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero