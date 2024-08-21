import { transform } from 'next/dist/build/swc';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap/gsap-core';


const Loading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const comp: any = useRef(null)
  const onion: any = useRef(null)

  const loadingTranslations: string[] = [
        "Loading",
        "ローディング", // Japanese
        "Načítání",               // Czech
        "Cargando",               // Spanish
        "Chargement",             // French
        "Laden",                  // German
        "加载中",  // Chinese (Simplified)
        "Загрузка",    // Russian    // Italian
        "Carregando",             // Portuguese
        "로딩 중",     // Korean
      ];

      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            if (prevIndex < 9) {
              return prevIndex + 1;
            } else {
              clearInterval(intervalId);
              return prevIndex;
            }
          });
        }, 100);

        
        

        
    
        return () => clearInterval(intervalId);
      }, []);
      
      useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(comp.current, 
              {x: '100%', duration: 1.5, ease: 'circ.out', delay: 1 }
            )

          }, comp);
 
          return () => ctx.revert();
    }, []);
    
      return (
        <div ref={comp} className='fixed top-0 w-full h-full flex flex-col gap-4 justify-center items-center z-[100] bg-[#0C0C14] text-[5vh] sm:text-[8vh] italic text-center '>
          <div className=''>{loadingTranslations[currentIndex]}</div>

          

          <div className={`${currentIndex == 9 ? 'opacity-0' : 'opacity-100'} relative w-[30vh] sm:w-[50vh] bg-[#444C64] h-[10px] overflow-hidden rounded-[1vh] transition-all duration-1000`}>
          <div 
            className={` w-full h-full bg-white transition-all ease-in-out`}
            style={{
              transform: currentIndex > 9 
                ? `translateX(100%)`
                : `translateX(${(currentIndex) * 10}%)`
            }}
          />
          </div>
        </div>
      );
    };
    
    export default Loading;