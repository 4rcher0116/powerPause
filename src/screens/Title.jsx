import React from 'react';
import CalltoAction from '../components/CalltoAction';
import Header from '../components/Header1';
import Pathway from '../components/pathway/Pathway';

const Title = () => {
    return (
        <div className='flex flex-col w-full'>
            <Header />
            <CalltoAction />
            <Pathway />
          </div>
      );
}

export default Title;