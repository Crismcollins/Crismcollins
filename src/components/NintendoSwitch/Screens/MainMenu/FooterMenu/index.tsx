import useLanguage from '@/app/hooks/useLanguage';
import useScreens from '@/app/hooks/useScreens';
import useDataStore from '@/app/stores/data-store';
import ActionIndicator from '@/components/NintendoSwitch/ActionIndicator';
import React from 'react'

const FooterMenu = () => {

  const { translator } = useLanguage();
  const { navigateToScreen } = useScreens();
  const { jobs, educations } = useDataStore();

  return (
    <div className='hidden sm:flex flex-row justify-end border-t gap-8 border-text pt-4'>
      <ActionIndicator
        keyLetter='A'
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