import React from 'react'
import JoyconButton from '../JoyconButton';

type DirectionButtonsProps = {
  className?: string;
}

const DirectionButtons = ({ className }:DirectionButtonsProps ) => {
  return (
    <div className={'flex justify-center items-center text-center gap-1 ' + className}>
      <JoyconButton direction='left' />
      <div className='flex flex-col gap-8'>
        <JoyconButton direction='up' />
        <JoyconButton direction='down' />
      </div>
      <JoyconButton direction='right' />
    </div>
  )
}

export default DirectionButtons;