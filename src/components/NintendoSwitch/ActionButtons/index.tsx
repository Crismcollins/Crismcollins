import React from 'react'
import ActionButton from '../ActionButton';
import useScreens from '@/app/hooks/useScreens';
import { Screens } from '@/types/screens';
import useAudioStore from '@/app/stores/audio-store';
import useDataStore from '@/app/stores/data-store';

type ActionButtonsProps = {
  className?: string;
}

const ActionButtons = ({ className }:ActionButtonsProps) => {

  const { playAudio, audioOn, setAudioOn } = useAudioStore();
  const { navigateToScreen } = useScreens();
  const { educations, jobs } = useDataStore();

  const handleChangeAudio = () => setAudioOn(!audioOn);

  const handleNavigate = (screen: Screens, params?: any) => {
    playAudio('this_one');
    navigateToScreen(screen, params);
  }

  return (
    <div className={'flex justify-center items-center text-center gap-1 ' + className }>
      <ActionButton letter='Y' onPress={() => handleNavigate('education', educations)} />
      <div className='flex flex-col gap-8'>
        <ActionButton letter='X' onPress={() => handleNavigate('jobs', jobs)} />
        <ActionButton letter='B' onPress={ () => handleNavigate('aboutme') } />
      </div>
      <ActionButton letter='A' onPress={handleChangeAudio} />
    </div>
  )
}

export default ActionButtons;