import React from 'react'
import Pathwayoption from './Pathwayoption'
import ExcerciseOption from './ExcerciseOption'
import NapOption from './NapOption'

const Pathway = () => {
  return (
    <div className='flex flex-row'>
        <NapOption />
        <ExcerciseOption />
    </div>
  )
}

export default Pathway