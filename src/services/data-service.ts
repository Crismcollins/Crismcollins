import { EducationModel, GameModel, JobModel, Language, SkillModel, UserModel } from "@/types/profile";
import { useGetQuery } from "./fetchs";

export const getUser = (language: Language) => {
  return useGetQuery<UserModel>(`/client/user/${language}`, 'Get User');
}

export const getAllEducations = (language?: Language) => {
  return useGetQuery<EducationModel[]>(`/client/educations/${language ?? ''}`, 'Get All Educations');
}

export const getAllJobs = (language?: Language) => {
  return useGetQuery<JobModel[]>(`/client/jobs/${language ?? ''}`, 'Get all jobs');
}

export const getAllSkills = (language?: Language) => {
  return useGetQuery<SkillModel[]>(`/client/skills/${language ?? ''}`, 'Get all skills');
}

export const getAllGames = (language: Language) => {
  return useGetQuery<GameModel[]>(`/client/games/${language}`, 'Get Games');
}