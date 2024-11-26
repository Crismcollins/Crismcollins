import { create } from 'zustand';

type SoundsID = 'user'
| 'this_one'
| 'popup_runtitle'
| 'klick'
| 'home'
| 'enter_back'

interface AudioItem {
  id: string;
  audio: HTMLAudioElement;
}

interface AudioStore {
  audioOn: boolean;
  audios: Record<string, AudioItem>;
  setAudioOn: (on: boolean) => void;
  addAudio: (id: SoundsID, src: string) => void;
  playAudio: (id: SoundsID) => void;
  pauseAudio: (id: SoundsID) => void;
}

const useAudioStore = create<AudioStore>((set, get) => ({
  audios: {},
  audioOn: true,
  addAudio: (id, src) => {
    set((state) => {
      if (!state.audios[id]) {
        state.audios[id] = { id, audio: new Audio(src) };
      }
      return state;
    });
  },

  playAudio: (id) => {
    const audio = get().audios[id]?.audio;
    if (audio) {
      audio.play();
    }
  },

  pauseAudio: (id) => {
    const audio = get().audios[id]?.audio;
    if (audio) {
      audio.pause();
    }
  },
  setAudioOn: (on: boolean) => {
    set((state) => {
      Object.values(state.audios).forEach(({ audio }) => {
        audio.muted = !on;
      });
      return { audioOn: on };
    });
  },
}));

export default useAudioStore;
