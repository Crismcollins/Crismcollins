import React, { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import FooterMenu from './FooterMenu';
import BodyMenu from './BodyMenu';
import useFadeAnimation from '@/app/hooks/useFadeAnimation';
import useScreens from '@/app/hooks/useScreens';
import useAudioStore from '@/app/stores/audio-store';

const MainMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const { playAudio } = useAudioStore();
  const { fadeAnimation, fadeIn, fadeOut } = useFadeAnimation();
  const { screen } = useScreens();

  useEffect(() => {
    playAudio('home')
  }, [])

  useEffect(() => {
    if (screen !== 'mainmenu')
      setIsVisible(false);
    else
      setIsVisible(true);
  }, [screen])

  return (
    <div className={`flex flex-col bg-background h-full w-full p-4 ${fadeAnimation} ${isVisible ? fadeIn : fadeOut}`}>
      <HeaderMenu />
      <BodyMenu />
      <FooterMenu />
    </div>
  );
};

export default MainMenu;
