import React from 'react';
import { useNavigate } from 'react-router-dom';

const PathforMobile = () => {
    const history = useNavigate();

    const handleNapButtonClick = () => {
        history('/napping-page');
    }
    const handleExerciseButtonClick = () => {
        history('/exercise-page');
    }

    return (
        <div className="flex flex-col bg-green-400 bg-opacity-10 w-full">
          <div className="flex flex-col gap-8 items-center pt-6 pb-8 px-10">
            <div
              className="text-center text-3xl font-['Inter'] font-medium text-white self-start mb-5 mx-auto"
              id="ChooseYourBreakType1"
            >
              Choose Your <br />
              <div className="text-[#65b2ea] contents" id="ChooseYourBreakType">
                Break Type
              </div>
            </div>
            <div className="bg-eggshell flex flex-col justify-end w-full items-center pt-8 pb-3 px-10 rounded-md" onClick={handleNapButtonClick}>
                <h1 className='text-black pb-8 pt-2 text-xl font-inter font-medium'>Napping</h1>
              <img
                src="https://file.rendit.io/n/F1EYjdyJoxkExE6LO91W.png"
                className=""
              />
            </div>
            <div className="bg-eggshell flex flex-col justify-end w-full items-center pt-8 pb-4 px-16 rounded-md" onClick={handleExerciseButtonClick}>
                <h1 className='text-black pb-8 pt-2 text-xl font-inter font-medium'>Exercise</h1>
              <img
                src="https://file.rendit.io/n/3ed4zA9Cwrdn1U60dD4J.png"
                className="mt-4"
              />
            </div>
          </div>
        </div>
      )
}

export default PathforMobile