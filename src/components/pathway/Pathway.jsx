import React from 'react'
import Pathwayoption from './Pathwayoption'
import ExcerciseOption from './ExcerciseOption'
import NapOption from './NapOption'

const Pathway = () => {
  return (
    <div className='flex flex-row pt-20 m-16 bg-white bg-opacity-20'>
        <NapOption />
        <ExcerciseOption />
    </div>
  )
}

export default Pathway;