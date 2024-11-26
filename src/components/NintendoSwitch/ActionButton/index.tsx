import React from 'react'
import JoyconButton from '../JoyconButton'

type ActionButtonProps = {
  letter: 'X' | 'Y' | 'A' | 'B';
  onPress?: () => void;
}

const ActionButton = ({ letter, onPress }:ActionButtonProps) => {
  return (
    <JoyconButton onPress={onPress}>
      <span className='flex justify-center items-center w-full h-full text-white'>{letter}</span>
    </JoyconButton>
  )
}

export default ActionButton;