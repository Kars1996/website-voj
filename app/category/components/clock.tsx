import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return {
      dayName,
      monthName,
      day,
      year,
      hours,
      minutes,
      seconds
    };
  };

  const { dayName, monthName, day, year, hours, minutes, seconds } = formatDate(date);

  return (
    <div>
      <div className="flex gap-4">
        <p>Date (mm:dd:yy)</p>
        <p>
          <span className="text-cyan-400">{dayName}</span>, 
          <span className="bg-white text-red-600 mx-1">{monthName}</span> 
          <span className="text-yellow-400">{day}</span> 
          <span className="text-yellow-400">{year}</span>
        </p>
      </div>
      <div className="flex gap-4">
        <p>Time (hh:mm:ss)</p>
        <p>
          <span>{hours}</span> : 
          <span>{minutes}</span> : 
          <span>{seconds}</span>
        </p>
      </div>
    </div>
  );
};

export default Clock;
