import React from 'react'
import DirectionButton from '../DirectionButton';


type DirectionButtonsProps = {
  className?: string;
}

const DirectionButtons = ({ className }:DirectionButtonsProps ) => {
  return (
    <div className={'flex justify-center items-center text-center gap-1 ' + className}>
      <DirectionButton direction='left' />
      <div className='flex flex-col gap-8'>
        <DirectionButton direction='up' />
        <DirectionButton direction='down' />
      </div>
      <DirectionButton direction='right' />
    </div>
  )
}

export default DirectionButtons;