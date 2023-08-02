import React from 'react';
import CalltoAction from '../components/CalltoAction';
import Header from '../components/Header1';
import Pathway from '../components/pathway/Pathway';
import Footer from '../components/Footer';

const Title = () => {
    return (
        <div className='flex flex-col w-full'>
            <Header />
            <CalltoAction />
            <Pathway />
            <Footer />
          </div>
      );
}

export default Title;