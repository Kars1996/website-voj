import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Projects = () => {
  const [state, setState] = useState(1);
  const containerRef = useRef(null);
  const lastTriggerTime = useRef(0);

  useLayoutEffect(() => {
    const container: any = containerRef.current;

    const handleScroll = (event: any) => {
      const currentTime = Date.now();
      if (currentTime - lastTriggerTime.current > 1000) {
        lastTriggerTime.current = currentTime;

        setTimeout(() => {
          setState((prevState) => {
            if (event.deltaY > 0) {
              if (prevState === 4) {
                return prevState; // Don't update the state if it's already 4
              } else {
                return prevState + 1; // Scroll down
              }
            } else {
              if (prevState === 0) {
                return prevState; // Don't update the state if it's already 0
              } else {
                return prevState - 1; // Scroll up
              }
            }
          });
        }, 2000);
      }
    };

    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  console.log(state);

  return (
    <div ref={containerRef} className="flex xl:flex-row flex-col w-full">
      <div className="xl:w-[45%] xl:h-[100vh] px-[7.6vh]">
        <div className="relative text-[5vh] mt-[16.4vh] z-10">
            <div className='relative z-0 '>Project Name</div>
        </div>
        <div className="flex gap-[3.2vh] text-[2vh] mt-[0.2vh]">
          <div>difficulty: </div>
          <div
            className="
                bg-gradient-to-r from-white to-[#0C0C14]
                inline-block 
                text-transparent
                bg-clip-text
                "
          >
            |||||||
          </div>
        </div>
        <div className="mt-[15vh] text-[2.5vh] w-[60vh]">
          <div>description:</div>
          <div
            className="
                bg-gradient-to-b from-white to-[#0C0C14]
                inline-block 
                text-transparent
                bg-clip-text
                "
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            aliquid eos, fugit libero deleniti nostrum, eum ipsam reprehenderit
            voluptatibus animi excepturi debitis ad veritatis minus! Repellat
            saepe nihil ut ea?
          </div>
        </div>

        <div className="flex mt-[16vh] text-[2.5vh]">
          <div>date: </div>
          <div>dd/mm/yy</div>
        </div>
      </div>
      <div className="xl:w-[55%] xl:h-[100vh] ">
        <img src="about-placeholder.png" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Projects;
