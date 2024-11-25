import CarouselGames from '@/components/NintendoSwitch/CarouselGames';
import OptionsTab from '@/components/NintendoSwitch/OptionsTab';
import React from 'react'

const BodyMenu = () => {
  return (
    <div className='flex flex-col h-full w-full gap-4 justify-center overflow-x-scroll'>
      <CarouselGames />
      <OptionsTab />
    </div>
  )
}

export default BodyMenu;