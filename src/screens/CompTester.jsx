import React from 'react';
import NapCarousel from '../components/NapPaths/NapCarousel';
import Footer from '../components/Footer';
import Timer from '../components/timer';


const CompTester = () => {
  return (
    <div className='flex flex-col w-full'>
        <NapCarousel />
        <Footer />
        <Timer hour={23} minute={59} />
    </div>
  )
}

export default CompTester