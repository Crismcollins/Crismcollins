import { ThemeMode } from '@/types/theme'
import { create } from 'zustand'

type State = {
  theme: ThemeMode;
}

type Actions = {
  setTheme: (theme: ThemeMode) => void;
}

const useThemeStore = create<State & Actions>((set) => ({
  theme: 'light',
  setTheme: (theme: ThemeMode) => set(() => ({ theme })),
}))

export default useThemeStore;
