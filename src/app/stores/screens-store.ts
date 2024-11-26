import { Screens } from '@/types/screens';
import { create } from 'zustand'

type State = {
  screen: Screens;
  param?: any;
}

type Actions = {
  setScreen: (screen: Screens, param?: any) => void;
}

const useScreensStore = create<State & Actions>((set) => ({
  screen: 'splash',
  param: null,
  setScreen: (screen: Screens, param?: any) => 
    set((state) => ({ 
      screen,
      param: param !== undefined ? param : state.param,
    })),
}));

export default useScreensStore;
