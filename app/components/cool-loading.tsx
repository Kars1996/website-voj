import { transform } from 'next/dist/build/swc';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap/gsap-core';


const Loading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nothing, setNothingToLoad] = useState(false)
  const [loadingBar, setLoadingBar] = useState(0);

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
        "Imagine 3 onions"     // Korean
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
        }, 300);

        
    
        return () => clearInterval(intervalId);
      }, []);


      if(currentIndex === 9) {
        setTimeout(() => {
          setCurrentIndex(10)
        }, 2000)
      }
      
      useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(comp.current, 
              {x: '100%', duration: 1.5, ease: 'circ.out', delay: 5.2 }
            )
            
            tl.to(onion.current,
              {opacity: 0.5, ease: 'power2.out'}, "<"
            )

          }, comp);
 
          return () => ctx.revert();
    }, []);
    
      return (
        <div ref={comp} className='fixed top-0 w-full h-full flex flex-col gap-4 justify-center items-center z-[100] bg-[#0C0C14] text-[8vh] italic text-center '>
          <div className=''>{loadingTranslations[currentIndex]}</div>

          <img ref={onion} className='absolute -z-10 h-full w-full opacity-0' src="onions.jpg" alt="" />

          <div className='relative w-[50vh] bg-[#444C64] h-[10px] overflow-hidden rounded-[1vh]'>
          <div 
            className="w-full h-full bg-white transition-all duration-1000 ease-in-out"
            style={{
              transform: currentIndex > 9 
                ? `translateX(100%)`
                : `translateX(${(currentIndex + 1) * 5}%)`
            }}
          />
          </div>
        </div>
      );
    };
    
    export default Loading;