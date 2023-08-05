import React from 'react';

const ExcerciseDuration = () => {
  const dataArray = [
    {
      id: 1,
      title: 'Quick Start (5 Minutes)',
      content: 'just 4.5 minutes per day of vigorous-intensity physical activity performed in 1-minute bursts were associated with up to 32% lower risk of cancer.',
    },
    {
      id: 2,
      title: 'Intermediate (15 Minutes)',
      content: 'Just 15 minutes of aerobic exercise improves cardiovascular fitness, boosts metabolism, enhances mood, and increases energy levels, making it a time-efficient and effective way to maintain overall well-being.',
    },
    {
      id: 3,
      title: 'Health Maintenance (30 Minutes)',
      content: '30 minutes of exercise daily aids weight maintenance by burning calories, boosting metabolism, and preserving muscle mass. ',
    },
    // Add more items as needed
    {
        id: 4,
        title: 'Weekly Goal for Weight loss (150 Minutes total)',
        content: '30 minutes of exercise daily aids weight maintenance by burning calories, boosting metabolism, and preserving muscle mass. ',
      },
  ];

  // const renderItems = () => {
  //   return dataArray.map((item) => (
  //     <details key={item.id} className="group p-6 [&_summary::-webkit-details-marker]:hidden w-full">
  //       <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
  //         <h2 className="text-lg font-medium">{item.title}</h2>
  //         <span className="relative h-5 w-5 shrink-0">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth="2"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  //             />
  //           </svg>

  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth="2"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  //             />
  //           </svg>
  //         </span>
  //       </summary>

  //       <p className="mt-4 leading-relaxed text-gray-700">{item.content}</p>
  //     </details>
  //   ));
  // };

  const renderItems = () => {
    return dataArray.map((item) => (
      <details
        key={item.id}
        className="group p-6 [&_summary::-webkit-details-marker]:hidden w-full"
        open={false} // Initially set to closed
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">{item.title}</h2>
          <span className="relative h-5 w-5 shrink-0">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">{item.content}</p>
      </details>
    ));
  };

  return (
    <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
      {renderItems()}
    </div>
  );
};

export default ExcerciseDuration;
