import React from 'react';
import NapCarousel from '../components/NapPaths/NapCarousel';
import Footer from '../components/Footer';
import Timer from '../components/timer';
import ExerciseDuration from '../components/ExcerciseDurations';
import Header2 from '../components/Header2';
import Pathway from '../components/pathway/Pathway';
import PathforMobile from '../components/pathway/PathforMobile';


const CompTester = () => {
  return (
    <div className='flex flex-col w-full bg-transparent'>
        {/* <NapCarousel /> */}
        {/* <ExerciseDuration /> */}
        <Header2 />
        <PathforMobile />
        <Footer />
        {/* <Timer hour={23} minute={59} /> */}
        <Timer startHour={0} startMinute={1} />

    </div>
  )
}

export default CompTester;