import { useState, useEffect } from 'react';

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  return formattedDate;
};

export default useCurrentDate;
