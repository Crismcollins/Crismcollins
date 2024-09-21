import React from 'react'
import ThumbStick from '../ThumbStick';
import JoyconButton from '../JoyconButton';
import DirectionButtons from '../DirectionButtons';

const JoyconLeft = () => {
  return (
    <div className="h-full w-40 bg-blue-600 rounded-l-[4rem] p-4">
      <div className='flex flex-col'>
        <div className='bg-gray-900 w-5 h-1.5 ml-auto' />

        <ThumbStick className='mt-8' />

        <DirectionButtons className='mt-12' />
        <div className='flex bg-gray-900 h-6 w-6 justify-center items-center rounded ml-auto mt-5'>
          <div className='bg-gray-800 rounded-full h-3.5 w-3.5'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoyconLeft;