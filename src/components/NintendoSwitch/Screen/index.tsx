import React, { useEffect, useState } from 'react'
import MainMenu from '../Screens/MainMenu';
import useScreens from '@/app/hooks/useScreens';
import AboutMe from '../Screens/AboutMe';
import { Screens } from '@/types/screens';
import useAudioStore from '@/app/stores/audio-store';
import Game from '../Screens/Game';
import Jobs from '../Screens/Jobs';
import Education from '../Screens/Education';
import Splash from '../Screens/Splash';
import useLoadData from '@/app/hooks/useLoadData';
import Spinner from '@/components/Spinner';

const TRANSITION_DURATION = 400;

const Screen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { loading } = useLoadData();

  const { screen } = useScreens();

  const addAudio = useAudioStore(state => state.addAudio);
  const [currentScreen, setCurrentScreen] = useState<Screens>(screen);

  const onShowSplash = () => {
    setIsVisible(true);
  }
  
  
  useEffect(() => {
    addAudio('user', 'sounds/User.mp3');
    addAudio('this_one', 'sounds/This One.mp3');
    addAudio('popup_runtitle', 'sounds/Popup + Run Title.mp3');
    addAudio('klick', 'sounds/Klick.mp3');
    addAudio('home', 'sounds/Home.mp3');
    addAudio('enter_back', 'sounds/Enter & Back.mp3');
  }, [])

  useEffect(() => {
    setTimeout(() => setCurrentScreen(screen), TRANSITION_DURATION);
  }, [screen])

  useEffect(() => {
    if (!loading)
      setTimeout(onShowSplash, 10);
  }, [loading]);

  return (
    <div className="w-full h-full bg-gray-900 p-5 xl:max-w-[80%]">
      <div className="h-full bg-black">
        { loading && <Spinner/> }
        { currentScreen === 'splash' && !loading && <Splash /> }
        { currentScreen === 'mainmenu' && !loading && <MainMenu /> }
        { currentScreen === 'aboutme' && !loading && <AboutMe /> }
        { currentScreen === 'game' && !loading && <Game /> }
        { currentScreen === 'jobs' && !loading && <Jobs /> }
        { currentScreen === 'education' && !loading && <Education /> }
      </div>
    </div>
  )
}

export default Screen;
