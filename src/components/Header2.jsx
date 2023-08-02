import React from 'react';
import logoSVG from "./assets/logo3.svg";
import bgImage from "./assets/workoutbg-1.jpg";

const Header2 = () => {
  return (
    <div className="relative "  >
     <img src={bgImage} className='object-cover w-full' />

     {/* <!-- Haze overlay --> */}
     <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>

        {/* <!-- Your content on top of the image --> */}
     <div className="absolute inset-0 flex items-left flex-col">
        <img src={logoSVG} alt='Power Pause' className='h-20 m-10'/>

        <p className="text-white text-2xl font-bold mt-10 mx-5">Take the Most Efficient Break
        It's now or never.
        Studies have shown that the most efficient forms of taking a break are napping or exercise. Maximize your breaktimes and optimize productivity with energizing exercise or refreshing naps. Take control for a more fulfilling workday!</p>
     </div>
    </div>
  )
}

export default Header2;