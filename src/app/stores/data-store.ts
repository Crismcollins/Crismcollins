import { Education, Game, Job, User } from '@/types/profile';
import { create } from 'zustand'

type State = {
  user: User | null;
  games: Game[] | null;
  jobs: Job[] | null;
  educations: Education[] | null;
  loading: boolean;
}

type Actions = {
  setUser: (user: User) => void;
  setGames: (games: Game[]) => void;
  setJobs: (jobs: Job[]) => void;
  setEducations: (educations: Education[]) => void;
  setLoading: (loading: boolean) => void;
}

const useDataStore = create<State & Actions>((set) => ({
  user: null,
  games: null,
  educations: null,
  jobs: null,
  loading: true,
  setUser: (user: User) => set(() => ({ user })),
  setGames: (games: Game[]) => set(() => ({ games })),
  setJobs: (jobs: Job[]) => set(() => ({ jobs })),
  setEducations: (educations: Education[]) => set(() => ({ educations })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
}))

export default useDataStore;
