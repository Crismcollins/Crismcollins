import React from 'react'
import IconData from '../PersonalData';
import ThemeModeButton from '../ThemeModeButton';
import Clock from '../NintendoSwitch/Clock';
import Battery from '../../../public/icons/Battery';
import useLanguage from '@/app/hooks/useLanguage';

type HeaderProps = {
  onPress: () => void;
  className?: string;
}

const Header = ({
  className,
  onPress
}: HeaderProps) => {

  const { translator } = useLanguage();

  return (
    <div className={`flex justify-between items-center border-b border-text pr-4 ${className}`}>
      <IconData
        className='px-2 py-2'
        data={translator.back}
        icon='arrow_back'
        onClick={onPress}
      />

      <div className='hidden sm:flex flex-column items-center h-full gap-8'>
        <ThemeModeButton />
        {/* <LanguageSwitch /> */}
      </div>

      <div className='hidden sm:flex gap-4 h-full items-center'>
        <Clock />
        <Battery size={24} />
      </div>
    </div>
  )
}

export default Header;