import React from 'react'

type JoyconButtonProps = {
  direction: 'right' | 'left' | 'up' | 'down'
}
const JoyconButton = ({
  direction
}: JoyconButtonProps) => {

  const getDirectionClass = () => {
    if (direction === 'up')
      return '-translate-x-1/2 left-1/2 bottom-[-0.3rem] border-l-[0.5rem] border-r-[0.5rem] border-b-[0.75rem] border-l-transparent border-r-transparent';
    else if (direction === 'down')
      return '-translate-x-1/2 left-1/2 bottom-[-0.5rem] border-l-[0.5rem] border-r-[0.5rem] border-t-[0.75rem] border-l-transparent border-r-transparent';
    else if (direction === 'left')
      return '-translate-y-1/2 left-1/4 top-1/2 border-t-[0.5rem] border-b-[0.5rem] border-r-[0.75rem] border-t-transparent border-b-transparent'
    else if (direction === 'right')
      return '-translate-y-1/2 left-1/3 top-1/2 border-t-[0.5rem] border-b-[0.5rem] border-l-[0.75rem] border-t-transparent border-b-transparent'
    else
      return ''
  }

  return (
    <div className="rounded-full w-8 h-8 bg-gray-900 rounded-full shadow-md p-0.5">
      <div className="rounded-full w-full h-full bg-gray-800 rounded-full shadow-md">
        <div className={"relative transform w-0 h-0 border-gray-900 " + getDirectionClass()}></div>
      </div>
    </div>
  )
}

export default JoyconButton;