import React from 'react'
import OptionButton from '../OptionButton';
import Work from '../../../../public/icons/work';
import School from '../../../../public/icons/school';
import Profile from '../../../../public/icons/profile';
import GitHub from '../../../../public/icons/github';
import Linkedin from '../../../../public/icons/linkedin';
import Download from '../../../../public/icons/download';
import useScreens from '@/app/hooks/useScreens';
import useDataStore from '@/app/stores/data-store';
import useLanguage from '@/app/hooks/useLanguage';

const OptionsTab = () => {

  const { jobs, educations } = useDataStore();
  const user = useDataStore(state => state.user);

  const { navigateToScreen } = useScreens();
  const { translator } = useLanguage();

  return (
    <div className='flex flex-row gap-2 sm:gap-4 flex-wrap sm:flex-nowwrap justify-center sm:mb-2'>
      <OptionButton
        text={translator.about_me}
        onPress={() => navigateToScreen('aboutme')}
      >
        <Profile color='brightamber' size={24} />
      </OptionButton>

      <OptionButton
        text={translator.education}
        onPress={() => navigateToScreen('education', educations)}
      >
        <School color='highlighted' size={24} />
      </OptionButton>

      <OptionButton
        text={translator.experience}
        onPress={() => navigateToScreen('jobs', jobs)}
      >
        <Work color='vibrantcoral' size={24} />
      </OptionButton>

      <OptionButton
        text='Linkedin'
        onPress={() => window.open(user?.linkedin_url, '_blank')}
      >
        <Linkedin size={24} />
      </OptionButton>

      <OptionButton
        text='Github'
        onPress={() => window.open(user?.github_url, '_blank')}
      >
        <GitHub size={24} />
      </OptionButton>

      <OptionButton
        text={translator.cv}
        onPress={() => console.log("asd")}
      >
        <Download color='brightamber' size={24} />
      </OptionButton>
    </div>
  )
}

export default OptionsTab;
