import { useState } from 'react'

const Loading = () => {
    const [currentLang, setCurrentLang] = useState(0);

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
        "로딩 중"     // Korean
      ];

      for (let i = 0; i <= 9; i++) {
        setTimeout(() => {
            if (i <= 9) { // Condition to stop execution
                setCurrentLang(currentLang + i);
                console.log(i);
            }
        }, 1000 * i);
    }

  return (
    <div className='fixed top-0 w-full h-full flex justify-center items-center z-[100] bg-[#0C0C14] text-[10vh] italic'>{currentLang}</div>
  )
}

export default Loading