import React, { ReactNode } from 'react'

type JoyconButtonProps = {
  children: ReactNode;
  onPress?: () => void;
}
const JoyconButton = ({
  children,
  onPress
}: JoyconButtonProps) => {

  return (
    <button type='button' onClick={onPress} >
      <div className="rounded-full w-8 h-8 bg-gray-900 rounded-full shadow-md p-0.5">
        <div className="rounded-full w-full h-full bg-gray-800 rounded-full shadow-md">
          {children}
        </div>
      </div>
    </button>
  )
}

export default JoyconButton;