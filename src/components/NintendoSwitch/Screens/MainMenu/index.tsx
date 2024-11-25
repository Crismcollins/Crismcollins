import React, { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import FooterMenu from './FooterMenu';
import BodyMenu from './BodyMenu';
import useLoadData from '@/app/hooks/useLoadData';
import Spinner from '@/components/Spinner';
import useFadeAnimation from '@/app/hooks/useFadeAnimation';
import useScreens from '@/app/hooks/useScreens';

const MainMenu = () => {
  const { loading } = useLoadData();
  const [isVisible, setIsVisible] = useState(false);
  
  const { fadeAnimation, fadeIn, fadeOut } = useFadeAnimation();
  const { screen } = useScreens();

  const onShowMenu = () => {
    setIsVisible(true);
  }

  useEffect(() => {
    if (!loading)
      setTimeout(onShowMenu, 10);
  }, [loading]);

  useEffect(() => {
    if (screen !== 'mainmenu')
      setIsVisible(false);
  }, [screen])

  if (loading) return <Spinner />;

  return (
    <div className={`flex flex-col bg-background h-full w-full p-4 ${fadeAnimation} ${isVisible ? fadeIn : fadeOut}`}>
      <HeaderMenu />
      <BodyMenu />
      <FooterMenu />
    </div>
  );
};

export default MainMenu;
