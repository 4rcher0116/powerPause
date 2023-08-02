import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const history = useNavigate();

  const calculateDeadline = () => {
    const now = new Date();
    const deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate(), props.hour, props.minute);

    if (deadline < now) {
      deadline.setDate(deadline.getDate() + 1);
    }

    const time = deadline - now;
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

    if(time <= 0){
        redirectPage();
    }
  };

  const redirectPage = () =>{
    history.push('/')
  }

  useEffect(() => {
    const interval = setInterval(calculateDeadline, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer bg-opacity-10 bg-white inline-block mt-6 p-4 text-center w-80">
      <div className="text-4xl font-bold">
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    </div>
  );
};

export default Timer;

