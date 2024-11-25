import React, { useEffect, useState } from 'react'
import { GameSlotProps } from './type';
import useAudioStore from '@/app/stores/audio-store';

const GameSlot = ({
  name,
  image,
  onPress,
}: GameSlotProps) => {

  const [isHover, setIsHover] = useState<boolean>(false);
  const { playAudio } = useAudioStore()

  const onHover = () => {
    playAudio('klick');
    setIsHover(true);
  }

  const onPressGame = () => {
    if (name && image) {
      playAudio('popup_runtitle')
      onPress?.();
    }
  }

  const noRightClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  const borderStyle = image ?
    'bg-transparent' :
    'bg-separator shadow-md'

  return (
    <div className={`flex flex-col items-center w-[100px] sm:block h-full sm:w-56 ${ (!name || !image) ? 'hidden' : '' }`}>
      <p 
        className={`text-highlighted text-center sm:!h-auto text-sm sm:text-lg mb-2 transition-opacity duration-200 ${isHover && name ? 'sm:opacity-100' : 'sm:opacity-0'}`}
        style={{ height: 'inherit' }}
        >
          {name ?? `C`}
        </p>
      <div
        className={`bg-separator border-4 h-full w-16 sm:w-56 p-0 ${borderStyle} border-transparent rounded-md transition duration-200 ${isHover ? 'brilliance' : ''}`}
        onClick={onPressGame}
        onMouseEnter={onHover}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className='bg-background h-full w-full'>
          <img
            className='noselect'
            src={image}
            onContextMenu={noRightClick}
            draggable="false"
          />
        </div>
      </div>
    </div>
  )
}

export default GameSlot;
