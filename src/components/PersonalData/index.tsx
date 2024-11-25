import useAudioStore from '@/app/stores/audio-store';
import React, { ReactNode, useEffect, useState } from 'react'

type PersonalDataProps = {
  data: string;
  className?: string;
  icon?: 'mail' | 'phone_iphone' | 'location_on' | 'arrow_back';
  customIcon?: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const IconData = ({
  data,
  className,
  icon,
  customIcon,
  href = '#',
  onClick
}: PersonalDataProps) => {

  const [isHover, setIsHover] = useState<boolean>(false);
  const onHover = () => setIsHover(true);

  const playSound = useAudioStore(state => state.playAudio);
  const playSoundHover = useAudioStore(state => state.playAudio);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    playSound('this_one');
    setTimeout(() => onClick?.(e) , 100)
    
  }

  useEffect(() => {
    if (isHover)
      playSoundHover('klick');
  }, [isHover])

  return (
    <a
      href={href}
      onClick={(e) => onClick && handleClick(e)}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onHover}
      onMouseLeave={() => setIsHover(false)}
      className={`flex gap-2 border-2 px-6 py-1 transition duration-200 border-transparent ${isHover ? 'brilliance' : ''} dark:hover:text-watergreen hover:text-highlighted  ${className}`}
    >
      {icon && (
        <span className="material-icons">
          {icon}
        </span>
      )}
      {customIcon && (
        customIcon
      )}
      <p className=''>{data}</p>
    </a>
  )
}

export default IconData;
