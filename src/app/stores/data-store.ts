import { EducationModel, GameModel, JobModel, UserModel } from '@/types/profile';
import { create } from 'zustand'

type State = {
  user: UserModel | null;
  games: GameModel[] | null;
  jobs: JobModel[] | null;
  educations: EducationModel[] | null;
  loading: boolean;
}

type Actions = {
  setUser: (user: UserModel) => void;
  setGames: (games: GameModel[]) => void;
  setJobs: (jobs: JobModel[]) => void;
  setEducations: (educations: EducationModel[]) => void;
  setLoading: (loading: boolean) => void;
}

const useDataStore = create<State & Actions>((set) => ({
  user: null,
  games: null,
  educations: null,
  jobs: null,
  loading: true,
  setUser: (user: UserModel) => set(() => ({ user })),
  setGames: (games: GameModel[]) => set(() => ({ games })),
  setJobs: (jobs: JobModel[]) => set(() => ({ jobs })),
  setEducations: (educations: EducationModel[]) => set(() => ({ educations })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
}))

export default useDataStore;
