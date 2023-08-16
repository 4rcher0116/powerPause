import React from 'react';
import logoSVG from "./assets/logofinal2.svg";
import bgImage from "./assets/workoutbg-2.png";
// src="https://file.rendit.io/n/X4NmA9Yim8Ut3CgUV4rk.png"
// src="https://file.rendit.io/n/oUlzPGBZHV7dJ6tbzfwd.png"

const Header2 = () => {
  return (
    <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-32 lg:flex-col lg:gap-32 w-full items-start md:w-full lg:w-full" id="RootRoot">
      <img
        src="https://file.rendit.io/n/1FIAG4kbERyc0x8o4z4K.png"
        className="w-1/2 mx-auto md:ml-[145px] "
        alt="logo"
      />
      <div className="self-stretch relative flex flex-col gap-8 pb-12 md:hidden lg:hidden">
        
          <div className="text-6xl font-['Inter'] font-medium text-white relative ml-6 h-full leading-tight">
            Optimize <br />
            Your
            <div className="text-[#65b2ea] contents leading-tight">
              {" "}
              <br />
              Breaktime
              <br />
            </div>
          </div>

          <img
            src="https://file.rendit.io/n/3ovO6SPyynLSo9xQ6gIU.png"
            className="w-3/4 mx-auto"
          />
    </div>
    
      <img
        src="https://file.rendit.io/n/ZdRSTauLWgror3hdCtRa.png"
        className="hidden md:block lg:hidden w-[633px] h-[520px] absolute top-32 left-[461px]"
        alt="Image 3"
      />
      <div className="hidden md:flex lg:hidden text-[80px] font-medium text-white relative ml-2 md:relative md:w-2/5 md:h-[75.15%] lg:text-[128px] lg:font-medium lg:text-white lg:relative lg:ml-3 lg:w-⅖">
        Optimize <br />
        Your <br />
        <span className="text-[#65b2ea]">Breaktime</span>
      </div>
    </div>
  );


  
}

export default Header2