import React from 'react'

type ThumbStickProps = {
  className?: string;
}

const ThumbStick = ({ className }:ThumbStickProps) => {
  return (
    <div className={"flex justify-center items-center h-full " + className}>
      <div className="rounded-full w-16 h-16 bg-gray-900 rounded-full shadow-md p-2">
        <div className="rounded-full w-full h-full bg-gray-800 rounded-full shadow-md">
        </div>
      </div>
    </div>
  )
}

export default ThumbStick;