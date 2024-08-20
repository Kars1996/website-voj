'use client'
import React, { useEffect, useRef, useLayoutEffect, use } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export default function About() {

const comp = useRef(null);
const div1 = useRef(null);
const div2 = useRef(null);
const div3 = useRef(null);
const div4 = useRef(null);

useLayoutEffect(() => {
    

  
    let ctx = gsap.context(() => {
    if (window.innerWidth >= 1280) {
    
        gsap.registerPlugin(ScrollTrigger);

        const elements = [div1.current, div2.current, div3.current, div4.current];

        elements.forEach((element, index) => {
            const startY = index % 2 === 0 ? 0 : 0; // Alternate starting positions
            const endY = index % 2 === 0 ? 300 : -300;   // Alternate ending positions

            gsap.fromTo(element, 
                { y: startY },
                {
                    y: endY,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        toggleActions: "play none none reverse",
                        
                    },
                    
                }
            );
        });
    }

    if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    
        gsap.registerPlugin(ScrollTrigger);

        const elements = [div1.current, div2.current, div3.current, div4.current];

        elements.forEach((element, index) => {
            const startY = index % 2 === 0 ? 0 : 0; // Alternate starting positions
            const endY = index % 2 === 0 ? 100 : -100;   // Alternate ending positions

            gsap.fromTo(element, 
                { y: startY },
                {
                    y: endY,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        toggleActions: "play none none reverse",
                        
                    },
                    
                }
            );
        });
    }

    if (window.innerWidth < 768) {
    
        gsap.registerPlugin(ScrollTrigger);

        const elements = [div1.current, div2.current, div3.current, div4.current];

        elements.forEach((element, index) => {
            const startY = index % 2 === 0 ? 0 : 0; // Alternate starting positions
            const endY = index % 2 === 0 ? 50 : -50;   // Alternate ending positions

            gsap.fromTo(element, 
                { y: startY },
                {
                    y: endY,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        toggleActions: "play none none reverse",
                        
                    },
                    
                }
            );
        });
    }



    }
    , comp);
    

    return () => ctx.revert();
}, []);

  return (
    <div ref={comp} className='h-[100vh] relative flex justify-center items-center'>
        <div className='text-[3.6vh] sm:text-[5vh] lg:text-[9vh] xl:text-[12.5vh] text-center z-0'>
            Freelance developer
        </div>
        <div className='flex justify-center h-full w-full absolute flex-wrap gap-y-[30vh] md:gap-y-[10vh] xl:gap-x-[5vh] 2xl:flex-nowrap'>
            <div  className='flex justify-center items-center mx-[10vh] -z-10 xl:-z-0 w-full sm:w-[calc(50%-20vh)] xl:w-1/4 translate-x-[10vh] sm:translate-x-[0vh]'>
                <img className='absolute' src="line.svg" />
                <div ref={div1} className='absolute flex justify-center items-center w-[24vh] h-[31vh] md:w-[29vh] md:h-[37vh] lg:w-[32vh] lg:h-[40vh] xl:w-[35vh] xl:h-[45vh] translate-y-[10vh] sm:translate-y-[0vh] '>
                    <img className='absolute rounded-[2vh]' src="placeholder.png" />
                    <div className='relative text-center sm:text-[2vh] xl:text-[2.4vh] tracking-wide mx-3'>1 year experience</div>
                </div>
            </div>
            <div  className='flex justify-center items-center mx-[10vh] -z-10 w-full sm:w-[calc(50%-20vh)] xl:w-1/4 translate-x-[-8vh] sm:translate-x-[0vh]'>
                <img className='absolute' src="line.svg" />
                <div ref={div2} className='absolute flex justify-center items-center w-[24vh] h-[31vh] md:w-[29vh] md:h-[37vh] lg:w-[32vh] lg:h-[40vh] xl:w-[35vh] xl:h-[45vh]'>
                    <img className='absolute rounded-[2vh]' src="placeholder2.png" />
                    <div className='relative text-center sm:text-[2vh] xl:text-[2.4vh] tracking-wide mx-3'>Creative problem solver</div>
                </div>
            </div>
            <div  className='flex justify-center items-center mx-[10vh] -z-10 xl:-z-0 w-full sm:w-[calc(50%-20vh)] xl:w-1/4 translate-x-[8vh] ] sm:translate-x-[0vh]'>
                <img className='hidden sm:flex absolute' src="line.svg" />
                <div ref={div3} className='absolute flex justify-center items-center w-[24vh] h-[31vh] md:w-[29vh] md:h-[37vh] lg:w-[32vh] lg:h-[40vh] xl:w-[35vh] xl:h-[45vh] translate-y-[5vh] sm:translate-y-[0vh]'>
                    <img className='absolute rounded-[2vh]' src="placeholder3.png" />
                    <div className='relative text-center sm:text-[2vh] xl:text-[2.4vh] tracking-wide mx-3'>Continuous Learner</div>
                </div>
            </div>
            <div  className='flex justify-center items-center mx-[10vh] -z-10 w-full sm:w-[calc(50%-20vh)] xl:w-1/4 translate-x-[-10vh] sm:translate-x-[0vh]'>
                <img className='hidden sm:flex absolute' src="line.svg" />
                <div ref={div4} className='absolute flex justify-center items-center w-[24vh] h-[31vh] md:w-[29vh] md:h-[37vh] lg:w-[32vh] lg:h-[40vh] xl:w-[35vh] xl:h-[45vh] translate-y-[-5vh] sm:translate-y-[0vh]'>

                    <img className='absolute rounded-[2vh]' src="placeholder4.png" />
                    <div className='relative text-center sm:text-[2vh] xl:text-[2.4vh] tracking-wide mx-3 '>Adaptable and Resilient</div>
                </div>
            </div>
        </div>
    </div>
  )
}

