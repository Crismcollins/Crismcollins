import useAudioStore from '@/app/stores/audio-store'
import React from 'react'
import EaseOutButton from '../EaseOutButton';

const AudioButton = () => {

  const { audioOn, setAudioOn } = useAudioStore();

  const handleChangeAudio = () => setAudioOn(!audioOn);

  const renderAudioOn = () => (
    <span className="material-icons">
      volume_up
    </span>
  )

  const renderAudioOff = () => (
    <span className="material-icons">
      volume_off
    </span>
  )

  return (
    <EaseOutButton
    className='flex justify-center'
    onClick={handleChangeAudio}
    >
      { audioOn ? renderAudioOn() : renderAudioOff() }
    </EaseOutButton>
  )
}

export default AudioButton;