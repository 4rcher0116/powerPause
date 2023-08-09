import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const { startHour = 0, startMinute = 0 } = props;
  const initialTime = startHour * 60 * 60 + startMinute * 60;
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [remainingTime]); // Include remainingTime in the dependency array

  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime / (60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / 60) % 60);
  const seconds = remainingTime % 60;

  return (
    <div className="timer bg-opacity-10 bg-white inline-block mt-6 p-4 text-center w-80">
      <div className="text-4xl font-bold">
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    </div>
  );
};

export default Timer;



