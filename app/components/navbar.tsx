'use client';
import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const comp = useRef(null);

    const NavbarItems = ['HOME', 'ABOUT', 'PROJECTS'];

    const navbarItem1 = useRef(null);
    const navbarItem2 = useRef(null);
    const navbarItem3 = useRef(null);
    const navbarLink1 = useRef(null);
    const navbarLink2 = useRef(null);
    const navbarLink3 = useRef(null);
    const lom1 = useRef(null);
    const lom2 = useRef(null);

    

    useEffect(() => {
        if (isOpen) {
            setPercentage(100);
        } else {
            setPercentage(0);
        }
    }, [isOpen]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            if (isOpen) {
                // Fade-in and slide-up effect when opening
                tl.fromTo(
                    [navbarItem1.current, navbarItem2.current, navbarItem3.current, navbarLink1.current, lom1.current, navbarLink2.current, lom2.current, navbarLink3.current],
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.3 }, 
                );

                
            } else {
                // Fade-out and slide-down effect when closing
                tl.to(
                    [navbarItem1.current, navbarItem2.current, navbarItem3.current, navbarLink1.current, lom1.current, navbarLink2.current, lom2.current, navbarLink3.current],
                    { opacity: 0, y: 100, duration: 0.5, stagger: 0.1, ease: 'power2.in' }
                );
            }

            


        }, comp);

        return () => ctx.revert();
    }, [isOpen]);

    return (
        <div ref={comp} className='w-full fixed top-0 py-[3.8vh] px-[1.8vh] sm:py-[3.78vh] sm:px-[7.77vh] flex items-center bor z-[100]'>
            <div className={`${isOpen ? 'translate-x-0' : 'translate-x-[100%]'} duration-1000 transition-all ease-in-out fixed h-full w-full xl:w-1/2 bg-black top-0 right-0`}>
                <div className='flex flex-col text-[8vh] sm:text-[12.6vh] h-full justify-center gap-10'>
                    <div className='flex flex-col h-[70%] justify-center border-b-[1px]'>
                        <div ref={navbarItem1} id='navbar-item1' className='my-[-10px] sm:my-[-30px] mx-5 sm:mx-20 cursor-pointer w-fit hover:text-[#818494] transition-colors duratino-1000 ease-in-out'>HOME</div>
                        <div ref={navbarItem2} id='navbar-item2' className='my-[-10px] sm:my-[-30px] mx-5 sm:mx-20 cursor-pointer w-fit hover:text-[#444c64] transition-colors duratino-1000 ease-in-out'>ABOUT</div>
                        <div ref={navbarItem3} id='navbar-item3' className='my-[-10px] sm:my-[-30px] mx-5 sm:mx-20 cursor-pointer w-fit hover:text-[#3c3c54] transition-colors duratino-1000 ease-in-out'>PROJECTS</div>
                    </div>

                    <div className='flex justify-center gap-[3vh] sm:gap-[3.8vh] text-[2.2vh] text-white px-[1vh]'>
                        <Link ref={navbarLink1} className='text-white' href='https://github.com/vojtikczhraje'>github</Link>
                        <div ref={lom1}>/</div>
                        <Link ref={navbarLink2}  className='text-white' href='https://github.com/vojtikczhraje'>discord</Link>
                        <div ref={lom2}>/</div>
                        <Link ref={navbarLink3}  className='text-white' href='https://github.com/vojtikczhraje'>mail</Link>
                    </div>
                </div>
            </div>

            <div className='text-[2vh] sm:text-[2.4vh]'>vojtikczhraje</div>

            <div onClick={() => setIsOpen(!isOpen)} className={`flex flex-col gap-[1vh] ml-auto cursor-pointer transition-all w-[10vh] h-[10vh] sm:w-[12vh] hsm:-[12vh] duration-300 ease-in-out z-[50]`}>
                <CircularProgressbarWithChildren className='h-[vh] text-white text-[25px]' value={percentage} text={``}
                    styles={{
                        path: {
                            stroke: `#fff`,
                            strokeLinecap: 'butt',
                            strokeWidth: '0.2vh',
                            transition: 'stroke-dashoffset 1s ease-in-out 0s',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        trail: {
                            stroke: '#d6d6d600',
                            strokeLinecap: 'round',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        background: {
                            fill: '#3e98c700',
                        },
                    }}
                >
                    <div>
                        <div onClick={() => setIsOpen(!isOpen)} className={`flex flex-col gap-[1vh] ml-auto cursor-pointer transition-all duration-300 ease-in-out z-[50]`}>
                            <div className={`${isOpen ? 'rotate-[45deg] translate-y-[4px]' : ''} w-[6vh] sm:w-[9vh] h-[0.2vh] bg-white transition-all duration-300 ease-in-out`}></div>
                            <div className={`${isOpen ? 'rotate-[-45deg] translate-y-[-8px]' : ''} w-[6vh] sm:w-[9vh] h-[0.2vh] bg-white transition-all duration-300 ease-in-out`}></div>
                        </div>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}

export default Navbar;
