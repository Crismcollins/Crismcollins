import React from 'react'
import { RRSSButtonProps } from './type';

const RRSSButton = ({
  children,
  onClick,
  className
}:RRSSButtonProps) => {

  return (
    <button
      type='button'
      className={'flex h-14 w-14 items-center justify-center rounded-xl transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 ' + className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default RRSSButton;