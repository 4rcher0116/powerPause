import React from 'react';
import NapCarousel from '../components/NapPaths/NapCarousel';
import Footer from '../components/Footer';
import Timer from '../components/timer';
import ExerciseDuration from '../components/ExcerciseDurations';
import Header2 from '../components/Header2';


const CompTester = () => {
  return (
    <div className='flex flex-col w-full'>
        {/* <NapCarousel /> */}
        {/* <ExerciseDuration /> */}
        <Header2 />
        <Footer />
        <Timer hour={23} minute={59} />
    </div>
  )
}

export default CompTester