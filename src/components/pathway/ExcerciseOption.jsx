import React from 'react'
import myGif from './excercisegif.gif'

const ExcerciseOption = () => {

  return (
    
    <div class="flex items-center justify-center w-1/2">
        <div class="w-full p-4">
            <div class="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card h-180">
                <div class="text-center prod-title">
                    <p class="text-2xl font-bold text-gray-900 uppercase">
                        Excercise Path
                    </p>
                    <p class="text-sm text-gray-400 uppercase">
                        Proceed to optimize your quick Excercise Process
                    </p>
                </div>
                <div class="prod-img p-3">
                    <img src={myGif} class="object-cover object-center w-full h-full"/>
                </div>
                <div class="grid gap-10 items-center prod-info">
                    <div class="flex items-center justify-between text-gray-900 md:flex-row">
                        <button class="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                            Choose to Excercise
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
}

export default ExcerciseOption