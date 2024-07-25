'use client';

import { useRef, useState, useEffect } from 'react';
import useWSADNavigation from './components/useWSADNavigation'
import Cmos from './category/cmos';
import Placeholder from './category/placeholder';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { set } from 'date-fns';

const queryClient = new QueryClient();

export default function Home() {

  const [currentSection, setCurrentSection] = useState(1);
  const [currentEnter, setCurrentEnter] = useState('Home');

  const [description, setDescription] = useState('About me, Contact Information...');

  const [TabName, setTabName] = useState('');


  const handleNavigate = (direction: string) => {
    switch (direction) {

      case 'up':
        setCurrentSection((prev) => (prev - 1 < 1 ? 14 : prev - 1));
        break;

      case 'down':
        setCurrentSection((prev) => (prev + 1 > 14 ? 1 : prev + 1));
        break;

      case 'left':
        setCurrentSection((prev) => {
          const newSection = prev + 7;
          return newSection > 14 ? newSection - 14 : newSection;
        });
        break;

      case 'right':
        setCurrentSection((prev) => {
          const newSection = prev - 7;
          return newSection < 1 ? newSection + 14 : newSection;
        });
        break;

      case 'enter':
        console.log('enter');
        if(currentSection === 1){
          setCurrentEnter('CMOS');
          setTabName('CMOS Setup Utility');
        }

        if(currentSection === 2){
          setCurrentEnter('Advanced BIOS Features');
          setTabName('Advanced BIOS Features');
        }

        if(currentSection === 3){
          setCurrentEnter('Advanced Chipset Features');
          setTabName('Advanced Chipset Features');
        }

        if(currentSection === 4){
          setCurrentEnter('Integrated Peripherials');
          setTabName('Integrated Peripherials');
        }

        if(currentSection === 5){
          setCurrentEnter('Power Management Setup');
          setTabName('Power Management Setup');
        }

        if(currentSection === 6){
          setCurrentEnter('PnP/PCI Configurations');
          setTabName('PnP/PCI Config Setup');
        }

        if(currentSection === 7){
          setCurrentEnter('PC Health Status');
          setTabName('PC Health Status');
        }

        if(currentSection === 8){
          setCurrentEnter('Frequency/Voltage Control');
          setTabName('Frequency/Voltage Control');
        }

        if(currentSection === 9){
          setCurrentEnter('Load Fail-Safe Defaults');
          setTabName('Load Fail-Safe Defaults');
        }

        if(currentSection === 10){
          setCurrentEnter('Load Optimized Defaults');
          setTabName('Load Optimized Defaults');
        }

        if(currentSection === 11){
          setCurrentEnter('Set Supervisor Password');
          setTabName('Set Supervisor Password');
        }

        if(currentSection === 12){
          setCurrentEnter('Set User Password');
          setTabName('Set User Password');
        }

        if(currentSection === 13){
          setCurrentEnter('Save & Exit Setup');
          setTabName('Save & Exit Setup');
        }

        if(currentSection === 14){
          setCurrentEnter('Exit Without Saving');
          setTabName('Exit Without Saving');
        }
        break;
      
      case 'escape':
        setCurrentEnter('Home');
        setTabName('');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if(currentSection == 1){
      setDescription('About me, Contact Information...');
    }

    if(currentSection == 2){
      setDescription('Skills, Certifications...');
    } 

    if(currentSection == 3){
      setDescription('Work Experience, Projects...');
    }   

    if(currentSection == 4){
      setDescription('Portfolio, GitHub Repositories...');
    } 

    if(currentSection == 5){
      setDescription('Achievements, Publications...');
    } 

    if(currentSection == 6){
      setDescription('Networking, References...');
    } 

    if(currentSection == 7){
      setDescription('Professional Development, Goals...');
    } 

    if(currentSection == 8){
      setDescription('Hobbies and Interests...');
    } 

    if(currentSection == 9){
      setDescription('Load Fail-Safe ...');
    } 

    if(currentSection == 10){
      setDescription('Portfolio Summary...');
    } 

    if(currentSection == 11){
      setDescription('Confidential Projects...');
    } 

    if(currentSection == 12){
      setDescription('Personal Projects...');
    } 

    if(currentSection == 13){
      setDescription('Submit Inquiry...');
    } 

    if(currentSection == 14){
      setDescription('Logout...');
    }


  }, [currentSection])
  

  useWSADNavigation(handleNavigate);

  // disable cursor, now it's enabled because of the testing (cursor-none)

  return (
    <main className="fixed flex w-full h-full flex-col items-center justify-center select-none">
      <div className='max-w-[800px] w-[75%] flex flex-col justify-center items-center'>
        <div className='sm:text-[20px] text-[15px]  text-center'>Voj&apos;s Portfolio
          Utility - Copyright (C) 1984-1999 
          Award Software
        </div>
        <div className='sm:text-[20px] text-[15px] text-center mb-2'>
          {TabName}
        </div>

        <div className={`${currentEnter === 'Home' ? 'block' : 'hidden'} w-full border-[2px]
        border-[#ffffff] p-[1px]`}>
           <div className='flex border-[2px] border-2[#ffffff] sm:text-[20px] text-[15px] text-[#ffff55]'>
              <div className={`w-1/2 border-r-[1px] border-[#ffffff] py-6 px-5 flex flex-col gap-4`}>
              
              <section id='1' className='flex'>


                <span className={`${currentSection == 1 ? 'bg-red-600 text-white' : 'bg-transparent'} flex items-center gap-2`}>
                  <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                  Standart CMOS Features</span>
                </section>

              <section id='1' ><span className={`${currentSection == 2 ? 'bg-red-600 text-white' : 'bg-transparent'} flex items-center gap-2`}>
              <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                Advanced BIOS Features
                </span></section>

              <section id='1' ><span className={`${currentSection == 3 ? 'bg-red-600 text-white' : 'bg-transparent'} flex items-center gap-2`}>
              <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                Advanced Chipset Features</span></section>

              <section id='1' ><span className={`${currentSection == 4 ? 'bg-red-600 text-white' : 'bg-transparent'} flex items-center gap-2`}>
              <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg> 
                Integrated Peripherials</span></section>

              <section id='1' ><span className={`${currentSection == 5 ? 'bg-red-600 text-white' : 'bg-transparent'} flex items-center gap-2`}>
              <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                Power Management Setup</span></section>

              <section id='1' ><span className={`${currentSection == 6 ? 'bg-red-600 text-white' : 'bg-transparent'} flex items-center gap-2`}>
              <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                PnP/PCI Configurations</span></section>

              <section id='1' ><span className={`${currentSection == 7 ? 'bg-red-600 text-white' : 'bg-transparent'} flex items-center gap-2`}>
              <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                PC Health Status</span></section>

              </div>
              <div className='w-1/2 border-l-[1px] border-[#ffffff] py-6 px-5 flex flex-col gap-4'>
              
              <section id='1' ><span className={`${currentSection == 8 ? 'bg-red-600 text-white' : 'bg-transparent'} flex items-center gap-2`}>
              <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg> 
                Frequency/Voltage Control</span></section>

              <section id='1' ><span className={`${currentSection == 9 ? 'bg-red-600 text-white' : 'bg-transparent'}`}>Load Fail-Safe Defaults</span></section>

              <section id='1' ><span className={`${currentSection == 10 ? 'bg-red-600 text-white' : 'bg-transparent'}`}>Load Optimized Defaults</span></section>

              <section id='1' ><span className={`${currentSection == 11 ? 'bg-red-600 text-white' : 'bg-transparent'}`}>Set Supervisor Password</span></section>

              <section id='1' ><span className={`${currentSection == 12 ? 'bg-red-600 text-white' : 'bg-transparent'}`}>Set User Password</span></section>

              <section id='1' ><span className={`${currentSection == 13 ? 'bg-red-600 text-white' : 'bg-transparent'}`}>Save & Exit Setup</span></section>

              <section id='1' ><span className={`${currentSection == 14 ? 'bg-red-600 text-white' : 'bg-transparent'}`}>Exit Without Saving</span></section>
              
              </div>
          </div>

          <div className='flex border-[2px] border-2[#ffffff] sm:text-[20px] text-[15px]'>
            <div className='w-1/2 border-[#ffffff] p-2 flex flex-col'>
              <p>Esc : Quit</p>
              <p>Enter : Go To Selected Category</p>
            </div>

            <div className='w-1/2 border-[#ffffff] p-2 flex '>
              <div className='flex h-fit  items-center gap-1'>
                <p>W</p>
                <p>S</p>
                <p>A</p>
                <p>D</p>


              <p className='ml-8'>: Select Item</p>
              </div>
            </div>

            
          </div>

          <div className='flex justify-center items-center w-full p-6 sm:text-[20px] text-[15px] text-[#ffff55] text-center'>
              {description}
          </div>
        </div>

        <div className={`${currentEnter === 'CMOS' ? 'block' : 'hidden'} w-full h-[522px] border-[2px]
        border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>
          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Cmos />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Advanced BIOS Features' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>
          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Advanced Chipset Features' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>
          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Integrated Peripherials' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>
          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Power Management Setup' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'PnP/PCI Configurations' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'PC Health Status' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Frequency/Voltage Control' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Load Fail-Safe Defaults' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Load Optimized Defaults' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>


        <div className={`${currentEnter === 'Set Supervisor Password' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>


          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Set User Password' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Save & Exit Setup' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>

        <div className={`${currentEnter === 'Exit Without Saving' ? 'block' : 'hidden'} w-full h-[522px] border-[2px] border-[#ffffff] p-[1px] sm:text-[20px] text-[15px] `}>

          <div className='w-full h-full border-[2px] border-[#ffffff]'>
            <Placeholder  />
            
          </div>
        </div>




    </div>
    </main>
  );
}


