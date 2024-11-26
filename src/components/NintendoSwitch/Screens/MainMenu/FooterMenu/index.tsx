import useLanguage from '@/app/hooks/useLanguage';
import useScreens from '@/app/hooks/useScreens';
import useAudioStore from '@/app/stores/audio-store';
import useDataStore from '@/app/stores/data-store';
import ActionIndicator from '@/components/NintendoSwitch/ActionIndicator';
import React from 'react'

const FooterMenu = () => {

  const { audioOn, setAudioOn } = useAudioStore();
  const { jobs, educations } = useDataStore();

  const { translator } = useLanguage();
  const { navigateToScreen } = useScreens();

  return (
    <div className='hidden sm:flex flex-row justify-end border-t gap-8 border-text pt-4'>
      <ActionIndicator
        keyLetter='A'
        text='Audio on/off'
        onKeyPress={() => {
          setAudioOn(!audioOn);
        }}
      />

      <ActionIndicator
        keyLetter='B'
        text={ translator.about_me }
        onKeyPress={() => navigateToScreen('aboutme')}
      />

      <ActionIndicator
        keyLetter='X'
        text={ translator.experience }
        onKeyPress={() => navigateToScreen('jobs', jobs)}
      />

      <ActionIndicator
        keyLetter='Y'
        text={ translator.education }
        onKeyPress={() => navigateToScreen('education', educations)}
      />
    </div>
  )
}

export default FooterMenu;