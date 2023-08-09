import React from 'react';
import logoSVG from "./assets/logofinal2.svg";
import bgImage from "./assets/workoutbg-2.png";

const Header2 = () => {
  return (
    <section id="home" className='flex md:flex-row flex-col'>
      <div className='flex-col'>
        <div className='flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2'>
          <div className='flex flex-row justify-between items-center w-full'>
            <h1>
              Optimize <br className='sm:block hidden'/>Your <br /> <span text-gradient> Break Time </span>
            </h1>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Header2