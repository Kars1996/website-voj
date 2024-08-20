'use client';
import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link'

const Hero = () => {

    const imageRefs = useRef<HTMLImageElement[]>([]);

    const comp = useRef(null);
    const HeroImage = useRef(null);
    const HeroImage2 = useRef(null);
    const HeroImage3 = useRef(null);

    const HeroText = useRef(null);
    const HeroText2 = useRef(null);

    const Links = useRef(null);
    const Links2 = useRef(null);
    const Links3 = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (event: any) => {
        const { clientX, clientY } = event;
  
        imageRefs.current.forEach((imageRef, index) => {
          if (imageRef) {
            const speed = (index + 1) * 0.5; // Adjust speed multiplier for each image
            const maxX = (index + 1) * 50; // Max translation X (can be customized)
            const maxY = (index + 1) * 50; // Max translation Y (can be customized)
  
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

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(HeroImage.current, 
              { opacity: 0, y: 100 }, 
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            )
            tl.fromTo(HeroImage2.current, 
                    { opacity: 0, y: 100 }, 
                    { opacity: 0.5, y: 0, duration: 0.5, ease: 'power2.out' }, 
                    "-=0.4" // This overlaps the animations by starting slightly before the previous one finishes
            )
            tl.fromTo(HeroImage3.current, 
                    { opacity: 0, y: 100 }, 
                    { opacity: 0.25, y: 0, duration: 0.5, ease: 'power2.out' }, 
                    "-=0.4" // This overlaps as well
            );

            tl.fromTo(
              [HeroText.current, HeroText2.current, Links.current, Links2.current, Links3.current],
              { opacity: 0, y: 100 }, 
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1, }, 
              
            );
          }, comp);
 
          return () => ctx.revert();
    }, []);

  return (
    <div ref={comp} className='flex flex-col lg:flex-row justify-center items-center w-full p-4 my-[13vh] sm:my-[24.8vh] gap-[4vh] lg:gap-[3vh]'>
        <img className='absolute -z-[40]' src="lines_background_hero.svg" alt="cary" />

        <div className='flex hidden lg:block items-center h-[38.5vh] w-[47vh] select-none'>
            <img
                src='pfp.png'
                alt='pfp'
                className='h-[39vh] absolute z-10 translate-x-[4vh] translate-y-[4vh]'
                ref={(el: HTMLImageElement | null) => { if (el) imageRefs.current[0] = el; }}
            />
            <img
                src='pfp.png'
                alt='pfp'
                className='h-[43vh] absolute z-0 opacity-50 translate-x-[2vh] translate-y-[2vh]'
                ref={(el: HTMLImageElement | null) => { if (el) imageRefs.current[1] = el; }}
            />
            <img
                src='pfp.png'
                alt='pfp'
                className='h-[47vh] absolute -z-10 opacity-25'
                ref={(el: HTMLImageElement | null) => { if (el) imageRefs.current[2] = el; }}
            />
            </div>

            <div className='flex justify-center block lg:hidden items-center h-[38.5vh] w-[38vh] sm:w-[47vh] select-none'>
            <img ref={HeroImage}
                src='pfp.png'
                alt='pfp'
                className='sm:h-[39vh] h-[30vh] absolute z-10 '
                
            />
            <img ref={HeroImage2}
                src='pfp.png'
                alt='pfp'
                className='sm:h-[43vh] h-[34vh] absolute z-0 opacity-50 '
               
            />
            <img ref={HeroImage3}
                src='pfp.png'
                alt='pfp'
                className='sm:h-[47vh] h-[38vh] absolute -z-10 opacity-25'
               
            />
            </div>

        
        
        <div className='flex flex-col gap-[1vh] text-[#818494]'>

            <img className='translate-y-[-5vh] select-none hidden absolute xl:block h-[60vh] -z-[20]' src="vojtikczhraje_arrow.svg" alt="bigassarrow"  />

            <div ref={HeroText} className='text-[2.6vh] px-[1vh] text-center lg:text-left'>bring your ideas to...</div>
            <div ref={HeroText2} className=' h-[14.2vh] px-[2vh] text-[8.6vh] sm:text-[9.6vh] text-[#0C0C14] relative z-20 tracking-wider'>reality</div>

            <div  className='absolute w-[42vh] sm:w-[48vh] h-[13.2vh]  bg-[#3C3C54] translate-y-[5.5vh] translate-x-[0.8vh] rounded-[0.8vh]'></div>

            <div className='flex justify-center gap-[3vh] sm:gap-[3.8vh] text-[2.2vh] text-white px-[1vh]'>
            <Link ref={Links} className='text-white' href='https://github.com/vojtikczhraje'>github</Link>
            <div ref={Links}>/</div>
            <Link ref={Links2} className='text-white' href='https://github.com/vojtikczhraje'>discord</Link>
            <div >/</div>
            <Link ref={Links3} className='text-white' href='https://github.com/vojtikczhraje'>mail</Link>
            </div>

            <img src='vojtikczhraje_arrow_mobile.svg' className='h-[14vh] w-[6vh] mx-auto block sm:hidden'></img>
        </div>
        
    </div>
  )
}

export default Hero