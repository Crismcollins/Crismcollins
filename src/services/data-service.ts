import { Education, Game, Job, Language, Skill, User } from "@/types/profile";
import { useGetQuery } from "./fetchs";

export const getUser = (language: Language) => {
  return useGetQuery<User>(`/client/user/${language}`, 'Get User');
}

export const getAllEducations = (language?: Language) => {
  return useGetQuery<Education[]>(`/client/educations/${language ?? ''}`, 'Get All Educations');
}

export const getAllJobs = (language?: Language) => {
  return useGetQuery<Job[]>(`/client/jobs/${language ?? ''}`, 'Get all jobs');
}

export const getAllSkills = (language?: Language) => {
  return useGetQuery<Skill[]>(`/client/skills/${language ?? ''}`, 'Get all skills');
}

export const getAllGames = (language: Language) => {
  return useGetQuery<Game[]>(`/client/games/${language}`, 'Get Games');
}