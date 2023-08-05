import React from 'react';
import NapCarousel from '../components/NapPaths/NapCarousel';
import Footer from '../components/Footer';
import Timer from '../components/timer';
import ExerciseDuration from '../components/ExcerciseDurations';


const CompTester = () => {
  return (
    <div className='flex flex-col w-full'>
        {/* <NapCarousel /> */}
        <ExerciseDuration />
        <Footer />
        <Timer hour={23} minute={59} />
    </div>
  )
}

export default CompTester