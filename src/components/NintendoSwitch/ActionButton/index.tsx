import React from 'react'
import JoyconButton from '../JoyconButton'

type ActionButtonProps = {
  letter: 'X' | 'Y' | 'A' | 'B'
}

const ActionButton = ({ letter }:ActionButtonProps) => {
  return (
    <JoyconButton>
      <span className='flex justify-center items-center w-full h-full text-white'>{letter}</span>
    </JoyconButton>
  )
}

export default ActionButton;