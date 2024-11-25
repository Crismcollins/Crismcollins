import React from 'react'
import ThumbStick from '../ThumbStick';
import HomeButton from './HomeButton';
import ActionButtons from '../ActionButtons';

const JoyconRight = () => {
  return (
    <div className="h-full w-40 p-4 bg-red-600 rounded-r-[4rem] hidden xl:block">
      <div className='relative h-full'>

        <div className="absolute w-5 h-5">
          <div className="bg-gray-900 w-5 h-1.5 absolute top-2.5 left-0 transform -translate-y-1/2" />
          <div className="bg-gray-900 w-1.5 h-5 absolute top-0 left-1/2 transform -translate-x-1/2" />
        </div>

        
        <ActionButtons className='absolute top-20' />
        <ThumbStick className='absolute bottom-48 left-0 right-0' />
        <HomeButton className='absolute bottom-24 left-3 ' />
        
      </div>
    </div>
  )
}

export default JoyconRight;
