import React from 'react'
import logoSVG from "./logo3.svg"

const Header = () => {
  return (
    <div className=' flex justify-center items-center text-center text-3xl font-extrabold dark:text-white sm:text-4xl text-yellow-400 w-full'>
        <img src={logoSVG} alt='Power Pause' className='h-20'/>
        {/* <h2 className='text-center'>Power Pause</h2> */}
    </div>
  )
}

export default Header;