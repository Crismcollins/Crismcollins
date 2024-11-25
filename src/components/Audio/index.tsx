import React, { forwardRef } from 'react';

type AudioProps = {
  src: string;
};

const Audio = forwardRef<HTMLAudioElement, AudioProps>(({ src }, ref) => {
  return <audio ref={ref} src={src} preload="auto" />;
});

export default Audio;
