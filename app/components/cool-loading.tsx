import { useState, useEffect } from 'react';

const Loading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nothing, setNothingToLoad] = useState(false)
  const [loadingBar, setLoadingBar] = useState(0);

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
        "Wait, but there is nothing to load"     // Korean
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
        }, 3000)
      }
      
      

      
      console.log(currentIndex)
    
      return (
        <div className='fixed top-0 w-full h-full flex flex-col gap-4 justify-center items-center z-[100] bg-[#0C0C14] text-[8vh] italic'>
          <div className=''>{loadingTranslations[currentIndex]}</div>
          <div className='relative w-[50vh] bg-[#444C64]  h-[10px] overflow-hidden w-fit'>
          <div
            className='absolute top-0 left-0 h-full w-full  transition-all duration-[0.3s] bg-[#D9D9D9]'
            style={{ transform: `translateX(${(currentIndex + 1) * 5}%)` }}
          />
      </div>
        </div>
      );
    };
    
    export default Loading;