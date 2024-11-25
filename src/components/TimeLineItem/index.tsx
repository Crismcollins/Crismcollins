import React from 'react'
import EaseOutButton from '../EaseOutButton';
import useAudioStore from '@/app/stores/audio-store';

export type TimelineItemProps = {
  title: string;
  institution: string;
  image: string;
  start_date: string;
  end_date?: string;
  selected?: boolean;
  onPress: () => void;
};

const TimeLineItem: React.FC<TimelineItemProps> = ({
  start_date,
  image,
  institution,
  title,
  end_date,
  selected,
  onPress
}) => {

  const { playAudio } = useAudioStore();

  const handlePress = () => {
    playAudio('this_one')
    onPress();
  }
  return (
    <EaseOutButton
      className={`w-max border-2 p-2 rounded-3xl transition duration-200 ${selected ? 'border-transparent sm:brilliance' : 'border-transparent'}`}
      onClick={handlePress}
      style={{ minWidth: '100%' }}
    >
      <div className="xl:ml-4 flex gap-4">
        <img src={image} alt={institution} className="w-20 h-20 xl:w-24 xl:h-24 rounded-full object-cover" />
        <div className='flex flex-col justify-center flex-1'>
        <p className="text-left text-lg xl:text-xl font-bold">{title}</p>
          <p className="text-md xl:text-lg font-medium text-left">{institution}</p>
          <p className="text-md xl:text-sm text-left">{`${start_date} - ${end_date ?? 'Actualidad'}`}</p>
        </div>
      </div>
    </EaseOutButton>
  );
}

export default TimeLineItem;