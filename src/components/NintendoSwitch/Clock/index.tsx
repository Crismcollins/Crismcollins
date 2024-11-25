import { formatTimeHHMM } from '@/helpers/timeParsers';
import React, { useEffect, useState } from 'react'

const Clock = () => {

  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])


  return (
    <div className='flex items-center'>{formatTimeHHMM(time)}</div>
  )
}

export default Clock;
