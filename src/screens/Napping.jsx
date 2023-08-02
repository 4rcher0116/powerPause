import React from 'react'
import NapCarousel from '../components/NapPaths/NapCarousel';
import Header from '../components/Header1';
import Footer from '../components/Footer';

const Napping = () => {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <NapCarousel />
      <Footer />
    </div>
  )
}

export default Napping;