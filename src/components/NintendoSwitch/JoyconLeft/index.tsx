import React from 'react'
import ThumbStick from '../ThumbStick';
import DirectionButtons from '../DirectionButtons';

const JoyconLeft = () => {
  return (
    <div className="h-full w-40 bg-blue-600 rounded-l-[4rem] p-4 hidden xl:block">
      <div className='relative h-full'>
        <div className='bg-gray-900 w-5 h-1.5 ml-auto' />

        <ThumbStick className='absolute right-0 left-0 top-20' />

        <DirectionButtons className='absolute bottom-48' />

        <div className='absolute right-3 bottom-24 flex bg-gray-900 h-6 w-6 justify-center items-center rounded ml-auto'>
          <div className='bg-gray-800 rounded-full h-3.5 w-3.5'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoyconLeft;
