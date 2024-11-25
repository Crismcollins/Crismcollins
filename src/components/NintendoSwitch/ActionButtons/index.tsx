import React from 'react'
import ActionButton from '../ActionButton';

type ActionButtonsProps = {
  className?: string;
}

const ActionButtons = ({ className }:ActionButtonsProps) => {
  return (
    <div className={'flex justify-center items-center text-center gap-1 ' + className }>
      <ActionButton letter='Y' />
      <div className='flex flex-col gap-8'>
        <ActionButton letter='X' />
        <ActionButton letter='B' />
      </div>
      <ActionButton letter='A' />
    </div>
  )
}

export default ActionButtons;