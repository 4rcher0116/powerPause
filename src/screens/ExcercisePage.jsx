import React from 'react';
import Header from '../components/Header1';
import WorkoutVideos from './Workout1Pathway';
import Footer from '../components/Footer';

const ExcercisePage = () => {
  return (
    <div className='flex flex-col w-full'>
        <Header />
        <WorkoutVideos />
        <Footer />
    </div>
  )
}

export default ExcercisePage