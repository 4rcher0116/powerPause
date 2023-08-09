import React, { useState, useEffect } from 'react';
//import alarmSound from './assets/alarm.mp3'; // Import the alarm sound file
import alarmSound2 from './assets2/EarlyRiser.mp3';

const Timer = (props) => {
  const { startHour = 0, startMinute = 0 } = props;
  const initialTime = startHour * 60 * 60 + startMinute * 60;
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [alarm, setAlarm] = useState(false); // New state for alarm

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      if (!alarm) {
        setAlarm(true);
        playAlarmSound();
      }
    }
  }, [remainingTime, alarm]);

  const playAlarmSound = () => {
    const audio = new Audio(alarmSound2);
    audio.play();

    // Cleanup after the sound finishes playing
    audio.addEventListener('ended', () => {
      setAlarm(false);
    });

    return () => {
      audio.removeEventListener('ended', () => {
        setAlarm(false);
      });
    };
  };

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




