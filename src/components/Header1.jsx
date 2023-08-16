import React from 'react'
import logoSVG from "./assets/logo3.svg";

const Header = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row md:gap-32 lg:flex-col lg:gap-32 w-full items-start md:w-full lg:w-full" id="RootRoot">
      <img
        src="https://file.rendit.io/n/1FIAG4kbERyc0x8o4z4K.png"
        className="w-1/2 mx-auto md:ml-[145px] "
        alt="logo"
      />
    </div>
  )
}

export default Header;