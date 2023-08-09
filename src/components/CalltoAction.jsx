import React from 'react';

const CalltoAction = () => {
  return (
    <div class="bg-white dark:bg-gray-800 border-t-2 border-b-2 border-gray-400">
      <div class="w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 text-center">
        <h2 class="text-3xl text-center font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block">Take the Most Efficient Break</span>
          <span class="block text-yellow-400">It&#x27;s now or never.</span>
        </h2>
        <p class="text-xl mt-4 w-full mx-2 text-black px-1 font-bold text-center">
          Studies have shown that the most efficient forms of taking a break are napping or exercise.
          Maximize your breaktimes and optimize productivity with energizing exercise or refreshing
          naps. Take control for a more fulfilling workday!
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0 flex justify-center">
          <div class="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              class="py-4 px-6 bg-yellow-400 hover:bg-black focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoAction;
