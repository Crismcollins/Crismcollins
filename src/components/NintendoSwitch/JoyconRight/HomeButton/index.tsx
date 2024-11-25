import React from 'react'

type HomeButtonProps = {
  className?: string;
}

const HomeButton = ({ className }:HomeButtonProps ) => {

  return (
    <div className={'flex justify-center items-center mr-auto ' + className} >
      <div className={`bg-gray-900 h-8 w-8 rounded-full flex justify-center items-center relative`}>
        <div className={`absolute inset-0 border-2 border-gray-600 rounded-full`}></div>
        <span className="material-icons text-gray-700">home</span>
      </div>
    </div>
  )
}

export default HomeButton;