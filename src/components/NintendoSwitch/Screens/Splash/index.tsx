import useScreens from '@/app/hooks/useScreens';
import React from 'react'

const Splash = () => {

  const { navigateToScreen } = useScreens();

  const handleNavigateToMainMenu = () => {
    navigateToScreen('mainmenu');
  }

  return (
    <div className='flex flex-col items-center justify-center gap-24 h-full w-full pb-24' onClick={handleNavigateToMainMenu}>
      <p className='text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brightamber text-center animate-slideUp' style={{ lineHeight: 'inherit' }}>Welcome to<br/>Crismcollins' portfolio</p>
      <p className='text-md sm:text-xl lg:text-3xl font-medium text-brightamber animate-blink'>Touch to start</p>
    </div>
  )
}

export default Splash;