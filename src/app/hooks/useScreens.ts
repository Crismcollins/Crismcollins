import { useEffect, useState } from 'react';
import useScreensStore from '../stores/screens-store';
import { Screens } from '@/types/screens';

const useScreens = (screen?: Screens) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const currentScreen = useScreensStore(state => state.screen);
  const param = useScreensStore(state => state.param);
  const setScreen = useScreensStore(state => state.setScreen);

  useEffect(() => {
    if (!screen) return;

    if (currentScreen === screen)
      setTimeout(() => setIsVisible(true), 100);
    else
      setTimeout(() => setIsVisible(false), 100);
  }, [currentScreen])

  return {
    screen: currentScreen,
    param,
    isVisible,
    navigateToScreen: setScreen
  }
}

export default useScreens;