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
  audios: Record<string, AudioItem>;
  addAudio: (id: SoundsID, src: string) => void;
  playAudio: (id: SoundsID) => void;
  pauseAudio: (id: SoundsID) => void;
}

const useAudioStore = create<AudioStore>((set, get) => ({
  audios: {},

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
}));

export default useAudioStore;
