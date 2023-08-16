import React, { useState } from 'react';

const AccordionItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="p-4 cursor-pointer">
            <div onClick={() => setOpen(!open)} className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <svg className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            {open && <div className="mt-2 text-gray-700">{item.content}</div>}
        </div>
    );
};

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

const Accordion = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded shadow">
            <div className="divide-y">
            <div class="flex items-center justify-center h-20 bg-gray-200">
                <h2 class="text-xl font-bold">Recommended Durations</h2>
            </div>
                {dataArray.map(item => (
                    <AccordionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
export default Accordion;